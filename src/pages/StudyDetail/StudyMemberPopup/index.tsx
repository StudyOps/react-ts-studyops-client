import Modal from 'layouts/Modal';
import React, { useCallback, useState } from 'react';
import {
  Container,
  InputWrapper,
  MemberList,
  ProfileWarpper,
  StatusDiv,
  TitleDiv,
} from './style';
import useSWR from 'swr';
import { IStudy } from 'types/db';
import fetcher from 'utils/fetcher';
import ProfileImage from 'components/ProfileImage';
import useRequest from 'hooks/useRequest';
import { inviteMembers } from 'api/ask';
import useInput from 'hooks/useInput';
import { toast } from 'react-toastify';

const status: { [key: string]: string } = {
  ACCEPT: '스터디원',
  WAIT: '수락대기',
  REJECT: '초대거절',
};

function StudyMemberPopup({
  show,
  onClose,
  groupId,
  isHost,
}: {
  groupId: number;
  show: boolean;
  isHost: boolean;
  onClose: () => void;
}) {
  // 스터디 정보
  const { data: studyInfo } = useSWR<IStudy>(`/info/${groupId}`, fetcher);
  // 스터디원 목록
  const { data: memberInfo, mutate: mutateMemberInfo } = useSWR<
    { nickName: string; status: string; profileImageUrl: string | null }[]
  >(`/asks/responses/${groupId}`, fetcher);

  const [loading, setLoading] = useState(false);

  const [nickName, onChangeNickName, setNickName] = useInput('');

  // 스터디원 초대
  const requestInvite = useRequest<boolean>(inviteMembers);
  const onClickInviteButton = useCallback(() => {
    setLoading(true);
    requestInvite(groupId, [nickName])
      .then(() => {
        mutateMemberInfo();
        setNickName('');
      })
      .catch((e) => {
        if (e.status === 400) {
          toast.error(e.message);
        } else {
          toast.error('스터디원을 초대하지 못하였습니다.');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [nickName]);

  return (
    <Modal show={show} onCloseModal={onClose}>
      <Container>
        <TitleDiv>
          스터디원
          <div onClick={onClose}>&times;</div>
        </TitleDiv>
        <MemberList>
          <div>
            <ProfileWarpper>
              <ProfileImage
                size={40}
                nickName={studyInfo?.hostName}
                url={studyInfo?.hostProfileImageUrl}
              />
              <div>{studyInfo?.hostName}</div>
              <img src={`${process.env.PUBLIC_URL}/crown.svg`} alt="icon" />
            </ProfileWarpper>
            <StatusDiv>스터디장</StatusDiv>
          </div>
          {memberInfo?.map((mem) =>
            mem.status === 'REJECT' ? null : (
              <div key={mem.nickName}>
                <ProfileWarpper>
                  <ProfileImage
                    size={40}
                    nickName={mem.nickName}
                    url={mem.profileImageUrl}
                  />
                  <div>{mem.nickName}</div>
                </ProfileWarpper>
                <StatusDiv>{status[mem.status]}</StatusDiv>
              </div>
            ),
          )}
        </MemberList>
        {isHost && (
          <InputWrapper>
            <input
              placeholder="초대할 사용자 닉네임"
              value={nickName}
              onChange={onChangeNickName}
            />
            <button onClick={onClickInviteButton} disabled={loading}>
              {loading ? '...' : '초대'}
            </button>
          </InputWrapper>
        )}
      </Container>
    </Modal>
  );
}

export default StudyMemberPopup;
