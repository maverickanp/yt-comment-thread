import { Trash, ThumbsUp } from "phosphor-react";
import {
  publishedDateFormatted,
  publishedDateRelativeToNow,
} from "../../utils/dateTimeUtils";
import styles from "./Comment.module.css";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

import { ICommentProps } from "../../interfaces/ICommentInterface";
import { Modal } from "../Modal/Modal";

export function Comment(comment: ICommentProps) {
  const [likeCount, setLikeCount] = useState(comment.like);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModalConfirmDelete(){
    setModalIsOpen(false)
    comment.onDeleteComment(comment.id)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src={comment.author.avatar_url} />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorTime}>
                <strong>{comment.author.name}</strong>
                <time
                  title={publishedDateFormatted(comment.published_at)}
                  dateTime={comment.published_at.toISOString()}
                >
                  {publishedDateRelativeToNow(comment.published_at)}
                </time>
              </div>
              <Modal 
                open={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onConfirm={handleModalConfirmDelete}
              />
              <button title="Deletar" onClick={() => setModalIsOpen(true)}>
                <Trash size={20} />
              </button>
            </header>
            <p>{comment.content}</p>
          </div>
          <footer>
            <button className="like" onClick={handleLikeComment}>
              <ThumbsUp size={24} />
              Curtir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Comment;
