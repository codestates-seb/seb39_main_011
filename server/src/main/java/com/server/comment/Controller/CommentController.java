package com.server.comment.Controller;

import com.server.comment.Entity.Comment;
import com.server.comment.DTO.CommentPostDto;
import com.server.comment.DTO.CommentPutDto;
import com.server.comment.Mapper.CommentMapper;
import com.server.comment.Service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/rev")
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper){
        this.commentService = commentService;
        this.mapper = mapper;
    }

    //리뷰댓글 작성
    @PostMapping
    public ResponseEntity postComment(@RequestBody CommentPostDto commentPostDto) {

        Comment comment = mapper.commentPostDtoToComment(commentPostDto);
        commentService.createComment(comment);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("/{comment-id}")
    public ResponseEntity putComment(@PathVariable("comment-id") long commentId,
                                     @RequestBody CommentPutDto commentPutDto) {
        commentPutDto.setCommentId(commentId);
        commentService.updateComment(mapper.commentPutDtoToComment(commentPutDto));
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("comment-id") long commentId) {
        commentService.deleteComment(commentId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
