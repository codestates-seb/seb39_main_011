package com.server.comment.Repository;

import com.server.comment.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

//    List<Comment> findCommentByRev_id(Long rev_id);
}
