
 System.register('locale', [], function(_export) {
    return {
        execute: function() {
            _export('default', function(app) {
                app.translator.translations = {"flarum-best-answer.forum.this_best_answer":"\u8fd9\u662f\u6700\u4f73\u56de\u590d","flarum-best-answer.forum.remove_best_answer":"\u79fb\u9664\u6700\u4f73\u56de\u590d","flarum-best-answer.forum.header_best_answer":"\u6700\u4f73\u56de\u590d - \u697c\u4e3b\u7684\u9009\u62e9","flarum-best-answer.forum.best_answer_button":"\u6700\u4f73\u56de\u590d","flarum-best-answer.forum.best_answer":"\u6700\u4f73\u56de\u590d","flarum-auth-github.forum.log_in.with_github_button":"\u4f7f\u7528 GitHub \u767b\u5165","core.forum.change_email.confirmation_message":"\u6211\u4eec\u5df2\u7ecf\u53d1\u9001\u4e86\u4e00\u5c01\u90ae\u4ef6\u81f3 {email}\uff0c\u8bf7\u6253\u5f00\u5b83\u5e76\u5b8c\u6210\u8d26\u53f7\u6fc0\u6d3b\u3002","core.forum.change_email.confirm_password_placeholder":"\u786e\u8ba4\u5bc6\u7801","core.forum.change_email.dismiss_button":"\u5b8c\u6210","core.forum.change_email.incorrect_password_message":"\u8fd9\u4e2a\u5bc6\u7801\u6709\u8bef!","core.forum.change_email.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.forum.change_email.title":"\u66f4\u6362\u90ae\u7bb1","core.forum.change_password.send_button":"\u53d1\u9001\u94fe\u63a5\u81f3\u90ae\u7bb1","core.forum.change_password.text":"\u5c06\u53d1\u9001\u4e00\u4e2a\u5b89\u5168\u94fe\u63a5\u81f3\u4f60\u7684\u90ae\u7bb1\u4ee5\u5b8c\u6210\u91cd\u7f6e\u5bc6\u7801\u3002","core.forum.change_password.title":"\u66f4\u6539\u5bc6\u7801","core.forum.composer.close_tooltip":"\u5173\u95ed","core.forum.composer.exit_full_screen_tooltip":"\u8fd8\u539f\u7a97\u53e3","core.forum.composer.full_screen_tooltip":"\u6700\u5927\u5316","core.forum.composer.minimize_tooltip":"\u6700\u5c0f\u5316","core.forum.composer_discussion.body_placeholder":"\u5199\u70b9\u4ec0\u4e48...","core.forum.composer_discussion.discard_confirmation":"\u8bdd\u9898\u8fd8\u6ca1\u6709\u53d1\u5e03\uff0c\u786e\u5b9a\u8981\u4e22\u5f03\uff1f","core.forum.composer_discussion.submit_button":"\u53d1\u5e03\u8bdd\u9898","core.forum.composer_discussion.title":"\u65b0\u7684\u8bdd\u9898","core.forum.composer_discussion.title_placeholder":"\u8bdd\u9898\u6807\u9898","core.forum.composer_edit.discard_confirmation":"\u66f4\u6539\u8fd8\u6ca1\u6709\u4fdd\u5b58\uff0c\u786e\u5b9a\u8981\u653e\u5f03\uff1f","core.forum.composer_edit.post_link":"\u7f16\u8f91 #{number} {discussion}","core.forum.composer_edit.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.forum.composer_reply.body_placeholder":"\u8bf4\u70b9\u4ec0\u4e48...","core.forum.composer_reply.discard_confirmation":"\u56de\u590d\u8fd8\u6ca1\u6709\u53d1\u8868\uff0c\u786e\u5b9a\u8981\u4e22\u5f03\uff1f","core.forum.composer_reply.posted_message":"\u4f60\u7684\u56de\u590d\u5df2\u53d1\u8868","core.forum.composer_reply.submit_button":"\u53d1\u8868\u56de\u590d","core.forum.composer_reply.view_button":"\u67e5\u770b","core.forum.discussion_controls.cannot_reply_button":"\u65e0\u6cd5\u56de\u590d","core.forum.discussion_controls.cannot_reply_text":"\u4f60\u6ca1\u6709\u6743\u9650\u56de\u590d\u6b64\u8bdd\u9898\u3002","core.forum.discussion_controls.delete_button":"\u5220\u9664","core.forum.discussion_controls.delete_confirmation":"\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u8bdd\u9898\uff1f","core.forum.discussion_controls.delete_forever_button":"\u6c38\u4e45\u5220\u9664","core.forum.discussion_controls.log_in_to_reply_button":"\u767b\u5165\u4ee5\u56de\u590d","core.forum.discussion_controls.rename_button":"\u66f4\u6539\u6807\u9898","core.forum.discussion_controls.reply_button":"\u56de\u590d","core.forum.discussion_controls.restore_button":"\u6062\u590d","core.forum.discussion_list.empty_text":"\u7a7a\u7a7a\u5982\u4e5f\uff0c\u4f55\u4e0d\u521b\u4f5c\u4e00\u4e2a\uff1f","core.forum.discussion_list.load_more_button":"\u8f7d\u5165\u66f4\u591a","core.forum.discussion_list.mark_as_read_tooltip":"\u6807\u8bb0\u4e3a\u5df2\u8bfb","core.forum.discussion_list.replied_text":"{username} \u56de\u590d\u4e8e {ago}","core.forum.discussion_list.started_text":"{username} \u53d1\u5e03\u4e8e {ago}","core.forum.edit_user.activate_button":"\u6fc0\u6d3b\u7528\u6237","core.forum.edit_user.email_heading":"\u90ae\u7bb1","core.forum.edit_user.email_label":"\u90ae\u7bb1","core.forum.edit_user.groups_heading":"\u7ec4","core.forum.edit_user.password_heading":"\u5bc6\u7801","core.forum.edit_user.password_label":"\u5bc6\u7801","core.forum.edit_user.set_password_label":"\u8bbe\u7f6e\u65b0\u5bc6\u7801","core.forum.edit_user.submit_button":"\u4fdd\u5b58\u66f4\u6539","core.forum.edit_user.title":"\u7528\u6237\u7f16\u8f91","core.forum.edit_user.username_heading":"\u7528\u6237\u540d","core.forum.edit_user.username_label":"\u7528\u6237\u540d","core.forum.forgot_password.dismiss_button":"\u5b8c\u6210","core.forum.forgot_password.email_placeholder":"\u90ae\u7bb1","core.forum.forgot_password.email_sent_message":"\u6211\u4eec\u5df2\u7ecf\u5c06\u91cd\u7f6e\u5bc6\u7801\u7684\u94fe\u63a5\u53d1\u9001\u81f3\u8be5\u90ae\u7bb1\uff0c\u5982\u679c\u957f\u65f6\u95f4\u4ecd\u672a\u6536\u5230\uff0c\u8bf7\u68c0\u67e5\u90ae\u4ef6\u5783\u573e\u7bb1\u3002","core.forum.forgot_password.not_found_message":"\u6b64\u90ae\u7bb1\u7684\u6ce8\u518c\u7528\u6237\u4e0d\u5b58\u5728","core.forum.forgot_password.submit_button":"\u91cd\u7f6e\u5bc6\u7801","core.forum.forgot_password.text":"\u8f93\u5165\u8d26\u6237\u7684\u90ae\u7bb1\uff0c\u5c06\u53d1\u9001\u4e00\u4e2a\u94fe\u63a5\u4e3a\u4f60\u91cd\u7f6e\u5bc6\u7801\u3002","core.forum.forgot_password.title":"\u5fd8\u8bb0\u5bc6\u7801","core.forum.header.admin_button":"\u7ba1\u7406\u540e\u53f0","core.forum.header.back_to_index_tooltip":"\u56de\u5230\u8ba8\u8bba\u5217\u8868","core.forum.header.log_in_link":"\u767b\u5165","core.forum.header.log_out_button":"\u767b\u51fa","core.forum.header.profile_button":"\u6211\u7684\u8d44\u6599","core.forum.header.search_placeholder":"\u641c\u7d22\u5176\u5b9e\u5f88\u7b80\u5355","core.forum.header.settings_button":"\u4e2a\u4eba\u8bbe\u7f6e","core.forum.header.sign_up_link":"\u6ce8\u518c","core.forum.index.all_discussions_link":"\u6240\u6709\u8bdd\u9898","core.forum.index.cannot_start_discussion_button":"\u65e0\u6cd5\u53d1\u5e03\u8bdd\u9898","core.forum.index.mark_all_as_read_confirmation":"\u786e\u8ba4\u5168\u90e8\u6807\u8bb0\u4e3a\u5df2\u8bfb\uff1f","core.forum.index.mark_all_as_read_tooltip":"\u6807\u8bb0\u6240\u6709\u4e3a\u5df2\u8bfb","core.forum.index.refresh_tooltip":"\u5237\u65b0","core.forum.index.start_discussion_button":"\u65b0\u7684\u8bdd\u9898","core.forum.index_sort.latest_button":"\u6700\u65b0\u56de\u590d","core.forum.index_sort.newest_button":"\u8fd1\u671f\u8bdd\u9898","core.forum.index_sort.oldest_button":"\u5386\u53f2\u8bdd\u9898","core.forum.index_sort.relevance_button":"\u6700\u4f73\u5339\u914d","core.forum.index_sort.top_button":"\u70ed\u95e8\u8bdd\u9898","core.forum.log_in.forgot_password_link":"\u5fd8\u8bb0\u4e86\u5bc6\u7801\uff1f","core.forum.log_in.invalid_login_message":"\u8fd9\u4e2a\u767b\u5165\u4fe1\u606f\u6709\u8bef\uff01","core.forum.log_in.password_placeholder":"\u5bc6\u7801","core.forum.log_in.remember_me_label":"\u8bb0\u4f4f\u6211","core.forum.log_in.sign_up_text":"\u8fd8\u6ca1\u6709\u6ce8\u518c\uff1f <a>\u6ce8\u518c<\/a>","core.forum.log_in.submit_button":"\u767b\u5165","core.forum.log_in.title":"\u767b\u5165","core.forum.log_in.username_or_email_placeholder":"\u7528\u6237\u540d \u6216 \u90ae\u7bb1","core.forum.notifications.discussion_renamed_text":"{username} \u66f4\u6539\u4e86\u6807\u9898","core.forum.notifications.empty_text":"\u6ca1\u6709\u65b0\u901a\u77e5","core.forum.notifications.mark_all_as_read_tooltip":"\u6807\u8bb0\u6240\u6709\u4e3a\u5df2\u8bfb","core.forum.notifications.title":"\u6d88\u606f\u901a\u77e5","core.forum.notifications.tooltip":"\u6d88\u606f\u901a\u77e5","core.forum.post.edited_text":"\u5df2\u7f16\u8f91","core.forum.post.edited_tooltip":"{username} \u7f16\u8f91\u4e8e {ago}","core.forum.post.number_tooltip":"\u53d1\u8868 #{number}","core.forum.post_controls.delete_button":"\u5220\u9664","core.forum.post_controls.delete_forever_button":"\u6c38\u4e45\u5220\u9664","core.forum.post_controls.edit_button":"\u7f16\u8f91","core.forum.post_controls.restore_button":"\u6062\u590d","core.forum.post_scrubber.now_link":"\u6700\u65b0\u56de\u590d","core.forum.post_scrubber.original_post_link":"\u6700\u65e9\u5185\u5bb9","core.forum.post_scrubber.unread_text":"{count} \u672a\u8bfb","core.forum.post_scrubber.viewing_text":"{index} \/ {count} \u6761|{index} \/ {count} \u6761","core.forum.post_stream.discussion_renamed_old_tooltip":"The old title was: \"{old}\"","core.forum.post_stream.discussion_renamed_text":"{username} \u5c06\u539f\u6807\u9898 {old} \u4fee\u6539\u6210 {new}","core.forum.post_stream.load_more_button":"\u8f7d\u5165\u66f4\u591a","core.forum.post_stream.reply_placeholder":"\u8bf4\u70b9\u4ec0\u4e48...","core.forum.post_stream.time_lapsed_text":"{period} \u540e","core.forum.rename_discussion.title":"\u8f93\u5165\u65b0\u7684\u6807\u9898","core.forum.rename_discussion.submit_button":"\u66f4\u6539\u6807\u9898","core.forum.search.all_discussions_button":"\u6240\u6709\u8bdd\u9898\u4e2d\u641c\u7d22 \"{query}\"","core.forum.search.discussions_heading":"\u8bdd\u9898","core.forum.search.users_heading":"\u7528\u6237","core.forum.settings.account_heading":"\u8d26\u6237\u8bbe\u7f6e","core.forum.settings.change_email_button":"\u66f4\u6362\u90ae\u7bb1","core.forum.settings.change_password_button":"\u66f4\u6539\u5bc6\u7801","core.forum.settings.notifications_heading":"\u6d88\u606f\u901a\u77e5","core.forum.settings.notify_by_email_heading":"\u90ae\u7bb1","core.forum.settings.notify_by_web_heading":"\u901a\u77e5","core.forum.settings.notify_discussion_renamed_label":"\u6211\u7684\u8bdd\u9898\u88ab\u4fee\u6539","core.forum.settings.privacy_disclose_online_label":"\u5141\u8bb8\u5176\u4ed6\u4eba\u770b\u5230\u6211\u7684\u5728\u7ebf\u72b6\u6001","core.forum.settings.privacy_heading":"\u9690\u79c1\u76f8\u5173","core.forum.settings.title":"\u4e2a\u4eba\u8bbe\u7f6e","core.forum.sign_up.email_placeholder":"\u90ae\u7bb1","core.forum.sign_up.dismiss_button":"\u5b8c\u6210","core.forum.sign_up.log_in_text":"\u5df2\u7ecf\u6ce8\u518c\u8fc7\u4e86\uff1f <a>\u767b\u5165<\/a>","core.forum.sign_up.password_placeholder":"\u5bc6\u7801","core.forum.sign_up.submit_button":"\u6ce8\u518c","core.forum.sign_up.title":"\u6ce8\u518c","core.forum.sign_up.username_placeholder":"\u7528\u6237\u540d","core.forum.sign_up.welcome_text":"\u6b22\u8fce\u4f60\uff0c{username}","core.forum.user.avatar_remove_button":"\u79fb\u9664","core.forum.user.avatar_upload_button":"\u4e0a\u4f20","core.forum.user.avatar_upload_tooltip":"\u4e0a\u4f20\u65b0\u5934\u50cf","core.forum.user.bio_placeholder":"\u5199\u70b9\u4ec0\u4e48\u4ecb\u7ecd\u4e0b\u81ea\u5df1\u5427","core.forum.user.discussions_link":"\u8bdd\u9898","core.forum.user.in_discussion_text":"{discussion}","core.forum.user.joined_date_text":"\u52a0\u5165\u4e8e {ago}","core.forum.user.online_text":"\u5728\u7ebf","core.forum.user.posts_load_more_button":"\u8f7d\u5165\u66f4\u591a","core.forum.user.posts_link":"\u56de\u590d","core.forum.user.settings_link":"\u4e2a\u4eba\u8bbe\u7f6e","core.forum.user_controls.button":"\u64cd\u4f5c","core.forum.user_controls.delete_button":"\u5220\u9664","core.forum.user_controls.delete_confirmation":"\u786e\u5b9a\u5220\u9664\u8fd9\u4e2a\u7528\u6237\uff1f\u8be5\u7528\u6237\u6240\u6709\u53d1\u8a00\u90fd\u4f1a\u88ab\u5220\u9664\u3002","core.forum.user_controls.edit_button":"\u7f16\u8f91","core.forum.user_email_confirmation.alert_message":"\u6211\u4eec\u5df2\u7ecf\u53d1\u9001\u4e86\u4e00\u5c01\u90ae\u4ef6\u81f3 {email}\uff0c\u8bf7\u6253\u5f00\u5b83\u5e76\u5b8c\u6210\u8d26\u53f7\u6fc0\u6d3b\u3002","core.forum.user_email_confirmation.resend_button":"\u91cd\u65b0\u53d1\u9001\u786e\u8ba4\u90ae\u4ef6","core.forum.user_email_confirmation.sent_message":"\u53d1\u9001","core.lib.badge.hidden_tooltip":"\u9690\u85cf","core.lib.username.deleted_text":"[\u5df2\u9500\u6237]","core.lib.error.generic_message":"\u7f51\u7edc\u4e0d\u592a\u987a\uff0c\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002","core.lib.error.not_found_message":"\u6ca1\u6709\u8fd9\u4e2a\u9875\u9762","core.lib.error.permission_denied_message":"\u597d\u50cf\u4e0d\u80fd\u8fdb\u884c\u6b64\u64cd\u4f5c","core.lib.error.rate_limit_exceeded_message":"\u4f60\u7684\u64cd\u4f5c\u592a\u9891\u7e41\u4e86\uff0c\u8bf7\u7b49\u4e00\u4f1a\u513f\u3002","core.lib.number_suffix.kilo_text":"K","core.lib.number_suffix.mega_text":"M","core.lib.series.glue_text":", ","core.lib.series.three_text":"{first}, {second}, \u8fd8\u6709 {third}","core.lib.series.two_text":"{first} \u548c {second}","flarum-akismet.forum.post.akismet_flagged_text":"Akismet \u6807\u8bb0\u4e3a\u5783\u573e\u5185\u5bb9","flarum-akismet.forum.post.not_spam_button":"\u975e\u5783\u573e","flarum-tags.forum.choose_tags.choose_primary_placeholder":"\u9009\u62e9 1 \u4e2a\u8282\u70b9|\u6700\u591a\u9009\u62e9 {count} \u4e2a\u8282\u70b9","flarum-tags.forum.choose_tags.choose_secondary_placeholder":"\u9009\u62e9 1 \u4e2a\u6807\u7b7e|\u6700\u591a\u9009\u62e9 {count} \u4e2a\u6807\u7b7e","flarum-tags.forum.choose_tags.edit_title":"\u4fee\u6539\u5206\u7c7b {title}","flarum-tags.forum.choose_tags.submit_button":"\u5b8c\u6210","flarum-tags.forum.choose_tags.title":"\u9009\u62e9\u5206\u7c7b","flarum-tags.forum.composer_discussion.choose_tags_link":"\u9009\u62e9\u5206\u7c7b","flarum-tags.forum.discussion_controls.edit_tags_button":"\u4fee\u6539\u5206\u7c7b","flarum-tags.forum.index.more_link":"\u66f4\u591a...","flarum-tags.forum.index.tags_link":"\u5206\u7c7b","flarum-tags.forum.index.untagged_link":"\u79fb\u9664\u5206\u7c7b","flarum-tags.forum.post_stream.added_tags_text":"{username} \u6dfb\u52a0\u5230 {tagsAdded}","flarum-tags.forum.post_stream.added_and_removed_tags_text":"{username} \u6dfb\u52a0\u5230 {tagsAdded} \u5e76\u4ece {tagsRemoved} \u79fb\u9664","flarum-tags.forum.post_stream.removed_tags_text":"{username} \u4ece {tagsRemoved} \u79fb\u9664","flarum-tags.forum.post_stream.tags_text":"{tags} \u5206\u7c7b|{tags} \u5206\u7c7b","flarum-tags.lib.deleted_tag_text":"\u5df2\u5220\u9664","flarum-suspend.forum.suspend_user.indefinitely_label":"\u6c38\u4e45\u51bb\u7ed3","flarum-suspend.forum.suspend_user.limited_time_label":"\u81ea\u5b9a\u4e49\u65f6\u95f4","flarum-suspend.forum.suspend_user.limited_time_days_text":" \u5929","flarum-suspend.forum.suspend_user.not_suspended_label":"\u4e0d\u51bb\u7ed3","flarum-suspend.forum.suspend_user.status_heading":"\u51bb\u7ed3\u7528\u6237\u72b6\u6001","flarum-suspend.forum.suspend_user.submit_button":"\u4fdd\u5b58\u66f4\u6539","flarum-suspend.forum.suspend_user.title":"\u51bb\u7ed3 {username}","flarum-suspend.forum.user_badge.suspended_tooltip":"\u51bb\u7ed3","flarum-suspend.forum.user_controls.suspend_button":"\u51bb\u7ed3","flarum-subscriptions.forum.badge.following_tooltip":"\u5173\u6ce8","flarum-subscriptions.forum.badge.ignoring_tooltip":"\u5ffd\u89c6","flarum-subscriptions.forum.discussion_controls.follow_button":"\u5173\u6ce8","flarum-subscriptions.forum.discussion_controls.unfollow_button":"\u53d6\u6d88\u5173\u6ce8","flarum-subscriptions.forum.discussion_controls.unignore_button":"\u53d6\u6d88\u5ffd\u89c6","flarum-subscriptions.forum.index.following_link":"\u5173\u6ce8","flarum-subscriptions.forum.notifications.new_post_text":"{username} \u56de\u590d\u4e86\u4f60\u5173\u6ce8\u7684\u5185\u5bb9","flarum-subscriptions.forum.settings.follow_after_reply_label":"\u81ea\u52a8\u5173\u6ce8\u6211\u56de\u590d\u7684\u5185\u5bb9","flarum-subscriptions.forum.settings.notify_new_post_label":"\u5173\u6ce8\u7684\u8bdd\u9898\u88ab\u56de\u590d","flarum-subscriptions.forum.sub_controls.follow_button":"\u5173\u6ce8","flarum-subscriptions.forum.sub_controls.following_button":"\u5173\u6ce8","flarum-subscriptions.forum.sub_controls.following_text":"\u5f53\u6709\u4eba\u56de\u590d\u6b64\u8bdd\u9898\u65f6\u63d0\u9192\u6211","flarum-subscriptions.forum.sub_controls.ignoring_button":"\u5ffd\u89c6","flarum-subscriptions.forum.sub_controls.ignoring_text":"\u4e0d\u63a5\u6536\u4efb\u4f55\u63d0\u9192\u5e76\u9690\u85cf\u8bdd\u9898","flarum-subscriptions.forum.sub_controls.not_following_button":"\u5e38\u89c4","flarum-subscriptions.forum.sub_controls.not_following_text":"\u4ec5\u5728\u6709\u4eba@\u63d0\u5230\u6211\u65f6\u63d0\u9192\u6211","flarum-subscriptions.forum.sub_controls.notify_alert_tooltip":"\u6709\u65b0\u56de\u590d\u65f6\u901a\u77e5\u63d0\u9192","flarum-subscriptions.forum.sub_controls.notify_email_tooltip":"\u6709\u65b0\u56de\u590d\u65f6\u53d1\u9001\u90ae\u4ef6","flarum-mentions.forum.composer.reply_to_post_text":"\u56de\u590d #{number}","flarum-mentions.forum.notifications.others_text":"{count} \u4eba|{count} \u4eba","flarum-mentions.forum.notifications.post_mentioned_text":"{username} \u56de\u590d\u4e86\u4f60\u7684\u5185\u5bb9","flarum-mentions.forum.notifications.user_mentioned_text":"{username} \u63d0\u5230\u4e86\u4f60","flarum-mentions.forum.post.mentioned_by_self_text":"{users} \u56de\u590d\u4e86\u5b83","flarum-mentions.forum.post.mentioned_by_text":"{users} \u56de\u590d\u4e86\u5b83","flarum-mentions.forum.post.others_text":"{count} \u4eba|{count} \u4eba","flarum-mentions.forum.post.quote_button":"\u5f15\u7528","flarum-mentions.forum.post.reply_link":"\u56de\u590d","flarum-mentions.forum.post.you_text":"\u4f60","flarum-mentions.forum.settings.notify_post_mentioned_label":"\u6709\u4eba\u56de\u590d\u4e86\u6211","flarum-mentions.forum.settings.notify_user_mentioned_label":"\u6709\u4eba\u63d0\u5230\u4e86\u6211","flarum-mentions.forum.user.mentions_link":"\u63d0\u5230\u7528\u6237","flarum-sticky.forum.badge.sticky_tooltip":"\u7f6e\u9876","flarum-sticky.forum.discussion_controls.sticky_button":"\u7f6e\u9876","flarum-sticky.forum.discussion_controls.unsticky_button":"\u53d6\u6d88\u7f6e\u9876","flarum-sticky.forum.post_stream.discussion_stickied_text":"{username} \u7f6e\u9876\u4e86\u8bdd\u9898","flarum-sticky.forum.post_stream.discussion_unstickied_text":"{username} \u53d6\u6d88\u7f6e\u9876\u8bdd\u9898","flarum-auth-facebook.forum.log_in.with_facebook_button":"\u4f7f\u7528 Facebook \u767b\u5165","flarum-auth-twitter.forum.log_in.with_twitter_button":"\u4f7f\u7528 Twitter \u767b\u5165","flarum-likes.forum.notifications.others_text":"{count} \u4eba|{count} \u4eba","flarum-likes.forum.notifications.post_liked_text":"{username} \u559c\u6b22\u4e86\u4f60\u7684\u5185\u5bb9","flarum-likes.forum.post.like_link":"\u559c\u6b22","flarum-likes.forum.post.liked_by_self_text":"{users} \u559c\u6b22\u5b83","flarum-likes.forum.post.liked_by_text":"{users} \u559c\u6b22\u5b83|{users} \u559c\u6b22\u5b83","flarum-likes.forum.post.others_link":"{count} \u4eba|{count} \u4eba","flarum-likes.forum.post.unlike_link":"\u53d6\u6d88\u559c\u6b22","flarum-likes.forum.post.you_text":"\u4f60","flarum-likes.forum.post_likes.title":"\u559c\u6b22\u5b83\u7684\u7528\u6237","flarum-likes.forum.settings.notify_post_liked_label":"\u6709\u4eba\u559c\u6b22\u6211\u7684\u5185\u5bb9","flarum-pusher.forum.discussion_list.show_updates_text":"\u6709 {count} \u4e2a\u8bdd\u9898\u6709\u65b0\u52a8\u6001|\u6709 {count} \u4e2a\u8bdd\u9898\u6709\u65b0\u52a8\u6001","flarum-lock.forum.badge.locked_tooltip":"\u9501\u5b9a","flarum-lock.forum.discussion_controls.lock_button":"\u9501\u5b9a\u8bdd\u9898","flarum-lock.forum.discussion_controls.unlock_button":"\u89e3\u9501\u8bdd\u9898","flarum-lock.forum.notifications.discussion_locked_text":"{username} \u9501\u5b9a\u4e86\u8bdd\u9898","flarum-lock.forum.post_stream.discussion_locked_text":"{username} \u9501\u5b9a\u4e86\u8bdd\u9898","flarum-lock.forum.post_stream.discussion_unlocked_text":"{username} \u89e3\u9501\u4e86\u8bdd\u9898","flarum-lock.forum.settings.notify_discussion_locked_label":"\u6211\u7684\u8bdd\u9898\u88ab\u9501\u5b9a","flarum-flags.forum.flag_post.confirmation_message":"\u8c22\u8c22\u4f60\u7684\u63d0\u9192\uff0c\u6211\u4eec\u5f88\u5feb\u4f1a\u5904\u7406\u3002","flarum-flags.forum.flag_post.dismiss_button":"\u5b8c\u6210","flarum-flags.forum.flag_post.reason_inappropriate_label":"\u4e0d\u6070\u5f53\u7684\u8a00\u8f9e","flarum-flags.forum.flag_post.reason_inappropriate_text":"\u5185\u5bb9\u7684\u8a00\u8f9e\u4e0d\u6070\u5f53 \u6216\u8fdd\u53cd\u4e86<a>\u793e\u533a\u89c4\u5219<\/a>","flarum-flags.forum.flag_post.reason_off_topic_label":"\u4e3b\u9898\u5206\u7c7b\u4e0d\u5f53","flarum-flags.forum.flag_post.reason_off_topic_text":"\u5185\u5bb9\u4e0e\u4e3b\u9898\u5206\u7c7b\u4e0d\u4e00\u81f4 \u5e94\u5f53\u79fb\u52a8\u5230\u5176\u5b83\u5730\u65b9","flarum-flags.forum.flag_post.reason_other_label":"\u5176\u5b83\u539f\u56e0","flarum-flags.forum.flag_post.reason_spam_label":"\u65e0\u610f\u4e49\u7684\u5185\u5bb9","flarum-flags.forum.flag_post.reason_spam_text":"\u8fd9\u4e9b\u5185\u5bb9\u6ca1\u6709\u592a\u591a\u7684\u610f\u4e49","flarum-flags.forum.flag_post.submit_button":"\u62a5\u544a","flarum-flags.forum.flag_post.title":"\u62a5\u544a","flarum-flags.forum.flagged_posts.empty_text":"\u6ca1\u6709\u65b0\u62a5\u544a","flarum-flags.forum.flagged_posts.item_text":"{username} in <em>{discussion}<\/em>","flarum-flags.forum.flagged_posts.title":"\u5185\u5bb9\u62a5\u544a","flarum-flags.forum.flagged_posts.tooltip":"\u5185\u5bb9\u62a5\u544a","flarum-flags.forum.post.dismiss_flag_button":"\u5ffd\u7565\u62a5\u544a","flarum-flags.forum.post.flagged_by_text":"\u7531 {username} \u62a5\u544a","flarum-flags.forum.post.flagged_by_with_reason_text":"{username} \u62a5\u544a\u4e86 {reason}","flarum-flags.forum.post_controls.flag_button":"\u62a5\u544a","flarum-approval.forum.badge.awaiting_approval_tooltip":"\u7b49\u5f85\u5ba1\u6838\u4e2d","flarum-approval.forum.post.awaiting_approval_text":"\u7b49\u5f85\u5ba1\u6838\u4e2d","flarum-approval.forum.post_controls.approve_button":"\u5ba1\u6838","flagrow-split.forum.post.was_split_to":"{count} \u4e2a\u56de\u590d\u88ab\u5206\u5272\u81f3 {target}","flagrow-split.forum.post.was_split_from":"{count} \u4e2a\u56de\u590d\u5206\u5272\u81ea {target}","flagrow-split.forum.split.from":"\u4e8e\u6b64\u5904\u5f00\u59cb\u5206\u5272","flagrow-split.forum.split.to":"\u4e8e\u6b64\u5904\u7ed3\u675f\u5206\u5272","flagrow-split.forum.modal.title":"\u5206\u5272\u8d34\u6587","flagrow-split.forum.modal.new_discussion_label":"\u6307\u5b9a\u65b0\u8d34\u6587\u6807\u9898","flagrow-split.forum.modal.submit_button":"\u5206\u5272","flagrow-image-upload.forum.buttons.attach":"\u9009\u62e9","flagrow-image-upload.forum.states.loading":"\u52a0\u8f7d","flagrow-image-upload.forum.states.success":"\u6210\u529f","flagrow-image-upload.forum.states.error":"\u9519\u8bef","ganuonglachanh-mdeditor.forum.toolbar.bold":"\u52a0\u7c97","ganuonglachanh-mdeditor.forum.toolbar.italic":"\u659c\u4f53","ganuonglachanh-mdeditor.forum.toolbar.underline":"\u4e0b\u5212\u7ebf","ganuonglachanh-mdeditor.forum.toolbar.strikethrough":"\u5220\u9664\u7ebf","ganuonglachanh-mdeditor.forum.toolbar.heading":"\u6807\u9898","ganuonglachanh-mdeditor.forum.toolbar.quote":"\u5f15\u7528","ganuonglachanh-mdeditor.forum.toolbar.code":"\u4ee3\u7801","ganuonglachanh-mdeditor.forum.toolbar.unordered_list":"\u65e0\u5e8f\u5217\u8868","ganuonglachanh-mdeditor.forum.toolbar.ordered_list":"\u6392\u5e8f\u5217\u8868","ganuonglachanh-mdeditor.forum.toolbar.link":"\u94fe\u63a5","ganuonglachanh-mdeditor.forum.toolbar.image":"\u63d2\u5165\u56fe\u7247","ganuonglachanh-mdeditor.forum.toolbar.guide":"Markdown \u6307\u5357","ganuonglachanh-mdeditor.forum.toolbar.details":"\u9690\u85cf\u5185\u5bb9","ganuonglachanh-mdeditor.forum.toolbar.reply_see":"\u56de\u590d\u53ef\u89c1","ganuonglachanh-mdeditor.forum.toolbar.center":"\u5c45\u4e2d","ganuonglachanh-mdeditor.forum.toolbar.right":"\u53f3\u5bf9\u9f50","ganuonglachanh-mdeditor.forum.toolbar.high_light":"\u9ad8\u4eae","davis-socialprofile.forum.edit.edit":"\u7f16\u8f91","davis-socialprofile.forum.edit.add":"\u6dfb\u52a0","davis-socialprofile.forum.edit.headtitle":"\u7f16\u8f91\u6309\u94ae","davis-socialprofile.forum.edit.title":"\u6807\u9898","davis-socialprofile.forum.edit.url":"URL","davis-socialprofile.forum.edit.submit":"\u4fdd\u5b58","davis-socialprofile.forum.edit.delete":"\u79fb\u9664","davis-socialprofile.forum.edit.deletetitle":"\u79fb\u9664\u6309\u94ae","flagrow-masquerade.forum.alerts.profile-completion-required":"\u8bf7\u586b\u5199\u4ee5\u4e0b\u6240\u9700\u7684\u7b80\u8981\u8868\u5b57\u6bb5\u3002\n","flagrow-masquerade.forum.buttons.view-profile":"\u67e5\u770b\u4e2a\u4eba\u4fe1\u606f","flagrow-masquerade.forum.buttons.configure-profile":"\u914d\u7f6e\u4e2a\u4eba\u4fe1\u606f","flagrow-masquerade.forum.buttons.save-profile":"\u4fdd\u5b58","flagrow-upload.forum.buttons.attach":"\u4e0a\u4f20\u9644\u4ef6","flagrow-upload.forum.states.loading":"\u52a0\u8f7d\u4e2d","flagrow-upload.forum.states.success":"\u4e0a\u4f20\u6210\u529f","flagrow-upload.forum.states.error":"\u4e0a\u4f20\u5931\u8d25","core.forum.discussion_controls.rename_text":"\u8f93\u5165\u65b0\u7684\u6807\u9898\uff1a","reflar-reactions.forum.warning":"\u4f60\u7684\u8868\u6001\u6539\u53d8\u4e86","reflar-reactions.forum.notification":"{username} \u5bf9\u4f60\u7684\u5e16\u5b50 {reaction} ","xengine-signature.forum.buttons.signature":"\u7b7e\u540d","xengine-signature.forum.buttons.save":"\u4fdd\u5b58\u7b7e\u540d","xengine-signature.forum.modal.loading.title":"\u52a0\u8f7d\u4e2d...","xengine-signature.forum.modal.loading.content":"\u8bf7\u7b49\u5f85...","xengine-signature.forum.modal.error.title":"Oops\uff01\u9047\u5230\u4e86\u4e00\u4e9b\u95ee\u9898...","xengine-signature.forum.modal.error.content":"\u9519\u8bef\u5217\u8868\uff1a","xengine-signature.forum.errors.max_char_limit_exceed":"\u8d85\u51fa\u6700\u5927\u5b57\u7b26\u6570\u9650\u5236","xengine-signature.forum.errors.max_image_width_exceed":"\u8d85\u51fa\u6700\u5927\u56fe\u7247\u5bbd\u5ea6\u9650\u5236","xengine-signature.forum.errors.max_image_height_exceed":"\u8d85\u51fa\u6700\u5927\u56fe\u7247\u9ad8\u5ea6\u9650\u5236","xengine-signature.forum.errors.max_image_count_exceed":"\u8d85\u51fa\u6700\u5927\u56fe\u7247\u6570\u9650\u5236","amaurycarrade-syndication.forum.autodiscovery.forum_activity":"\u8bba\u575b\u8d34\u6587\u53ca\u56de\u590d","amaurycarrade-syndication.forum.autodiscovery.forum_new_discussions":"\u8bba\u575b\u6700\u65b0\u8d34\u6587","amaurycarrade-syndication.forum.autodiscovery.tag_activity":"{tag} \u8282\u70b9\u8d34\u6587\u53ca\u56de\u590d","amaurycarrade-syndication.forum.autodiscovery.tag_new_discussions":"{tag} \u8282\u70b9\u6700\u65b0\u8d34\u6587","amaurycarrade-syndication.forum.autodiscovery.discussion_last_posts":"\u672c\u5e16\u4e2d\u7684\u56de\u590d","amaurycarrade-syndication.forum.feeds.titles.main_title":"{forum_name}","amaurycarrade-syndication.forum.feeds.titles.main_subtitle":"\u8bba\u575b\u6700\u65b0\u8d34\u6587\u53ca\u56de\u590d","amaurycarrade-syndication.forum.feeds.titles.main_d_title":"{forum_name} \u8d34\u6587","amaurycarrade-syndication.forum.feeds.titles.main_d_subtitle":"\u8bba\u575b\u6700\u65b0\u8d34\u6587","amaurycarrade-syndication.forum.feeds.titles.tag_title":"{tag} \u8282\u70b9\u8d34\u6587\u53ca\u56de\u590d","amaurycarrade-syndication.forum.feeds.titles.tag_subtitle":"{tag}\u300d\u8282\u70b9\u8d34\u6587\u53ca\u56de\u590d","amaurycarrade-syndication.forum.feeds.titles.tag_d_title":"{tag} \u8282\u70b9\u6700\u65b0\u8d34\u6587","amaurycarrade-syndication.forum.feeds.titles.tag_d_subtitle":"{tag} \u8282\u70b9\u6700\u65b0\u8d34\u6587","amaurycarrade-syndication.forum.feeds.titles.discussion_title":"{discussion_name}","amaurycarrade-syndication.forum.feeds.titles.discussion_subtitle":"\u672c\u5e16\u4e2d\u7684\u56de\u590d","issyrocks12-twofactor.forum.accountlabel":"\u53cc\u91cd\u9a8c\u8bc1","issyrocks12-twofactor.forum.reloadmsg":"\u6b63\u5728\u51c6\u5907\u53cc\u91cd\u9a8c\u8bc1... \u8bf7\u91cd\u65b0\u5f00\u542f\u53cc\u91cd\u9a8c\u8bc1\u7a97\u53e3","issyrocks12-twofactor.forum.incorrect_2fa":"\u65e0\u6548\u7684\u52a8\u6001\u5bc6\u7801","issyrocks12-twofactor.forum.2fa_disabled":"\u53cc\u91cd\u9a8c\u8bc1\u5df2\u505c\u7528","issyrocks12-twofactor.forum.2fa_enabled":"\u53cc\u91cd\u9a8c\u8bc1\u5df2\u542f\u7528","issyrocks12-twofactor.forum.remember_me_label":"\u8bb0\u4f4f\u6211","issyrocks12-twofactor.forum.modal.twofactor_title":"\u53cc\u91cd\u9a8c\u8bc1\u8bbe\u7f6e","issyrocks12-twofactor.forum.modal.heading":"\u53cc\u91cd\u9a8c\u8bc1\u8bbe\u7f6e","issyrocks12-twofactor.forum.modal.switch":"\u53cc\u91cd\u9a8c\u8bc1","issyrocks12-twofactor.forum.modal.QRheading":"\u53cc\u91cd\u9a8c\u8bc1\u4e8c\u7ef4\u6761\u7801","issyrocks12-twofactor.forum.modal.help":"\u626b\u63cf QR \u7801\uff0c\u6216\u8005\u624b\u52a8\u6dfb\u52a0\u7f16\u7801\u81f3 Google Authenticator \u6216\u5176\u4ed6 TOTP \u5e94\u7528\u7a0b\u5e8f\u3002","issyrocks12-twofactor.forum.modal.placeholder":"\u52a8\u6001\u5bc6\u7801","issyrocks12-twofactor.forum.modal.button":"\u9001\u51fa","issyrocks12-twofactor.forum.modal.2fa_help":"\u8f93\u5165\u6765\u81ea TOTP \u5e94\u7528\u7a0b\u5e8f\u7684\u52a8\u6001\u5bc6\u7801","issyrocks12-twofactor.forum.modal.close":"\u6211\u5df2\u4fdd\u5b58\u6211\u7684\u6761\u7801","issyrocks12-twofactor.forum.modal.recov":"\u590d\u539f\u6761\u7801","issyrocks12-twofactor.forum.modal.login_title":"\u53cc\u91cd\u9a8c\u8bc1","issyrocks12-twofactor.forum.modal.recov_help1":"\u8bf7\u4fdd\u5b58\u8fd9\u4e9b\u7f16\u7801\uff01","issyrocks12-twofactor.forum.modal.recov_help2":"\u8fd9\u662f\u5728\u6ca1\u6709 TOTP \u5e94\u7528\u7a0b\u5e8f\u8bbf\u95ee\u6743\u9650\u65f6\u8bbf\u95ee\u5e10\u6237\u7684\u552f\u4e00\u65b9\u5f0f\u3002\u8fd9\u4e9b\u7f16\u7801\u5c06\u4e0d\u518d\u663e\u793a\u3002","flagrow-byobu.forum.badges.is_private.tooltip":"\u79c1\u5bc6\u8d34\u6587","flagrow-byobu.forum.buttons.add_recipients":"\u53c2\u4e0e\u8005","flagrow-byobu.forum.buttons.submit":"\u597d","flagrow-byobu.forum.buttons.edit_recipients":"\u7f16\u8f91\u53c2\u4e0e\u8005","flagrow-byobu.forum.buttons.send_pd":"\u7ed9 {username} \u4e00\u4e2a\u4fe1\u606f","flagrow-byobu.forum.labels.recipients":"\u4ec5 {count} \u4eba\u53ef\u89c1","flagrow-byobu.forum.labels.user_deleted":"--\u5df2\u5220\u9664--","flagrow-byobu.forum.nav.private_discussions":"\u79c1\u5bc6\u8d34\u6587","flagrow-byobu.forum.input.search_recipients":"\u8f93\u5165 ID \u524d\u4e09\u4e2a\u5b57\u7b26\u8fdb\u884c\u641c\u7d22","flagrow-byobu.forum.search.headings.groups":"\u7528\u6237\u7fa4\u7ec4","flagrow-byobu.forum.modal.titles.update_recipients":"\u66f4\u65b0\u79c1\u5bc6\u8d34\u6587\u300c{title}\u300d\u7684\u53c2\u4e0e\u8005","flagrow-byobu.forum.modal.titles.add_recipients":"\u6dfb\u52a0\u53c2\u4e0e\u8005\u5230\u79c1\u5bc6\u8d34\u6587","flagrow-byobu.forum.post.recipients_modified.added_and_removed":"{username} \u6dfb\u52a0\u300c{added}\u300d\u5e76\u79fb\u9664\u300c{removed}\u300d","flagrow-byobu.forum.post.recipients_modified.added":"{username} \u6dfb\u52a0\u300c{added}\u300d","flagrow-byobu.forum.post.recipients_modified.removed":"{username} \u79fb\u9664\u300c{removed}\u300d","core.forum.index_sort.hot_button":"\u65f6\u5c1a\u8bdd\u9898","reflar-gamification.forum.vote_title":"\u6295\u7968\u4eba","reflar-gamification.forum.nav.name":"\u6d3b\u8dc3\u6392\u540d","reflar-gamification.forum.ranking.rank":"\u6392\u540d","reflar-gamification.forum.ranking.name":"\u7528\u6237","reflar-gamification.forum.ranking.amount":"\u7b49\u7ea7","reflar-gamification.forum.notification.upvote":"\u6709\u4eba\u9876\u4e86\u4f60","reflar-gamification.forum.notification.downvote":"\u6709\u4eba\u8e29\u4e86\u4f60","reflar-gamification.forum.notification.grid.upvoted":"\u6709\u4eba\u9876\u4e86\u4f60\u7684\u5e16\u5b50","reflar-gamification.forum.notification.grid.downvoted":"\u6709\u4eba\u8d5e\u4e86\u8e29\u7684\u5e16\u5b50","reflar-gamification.forum.user.points":"\u5206\u6570: {points}","reflar-gamification.forum.user.rank":"{rank}","reflar-gamification.forum.modal.title":"\u6295\u7968","reflar-gamification.forum.modal.upvotes_label":"\u9876","reflar-gamification.forum.modal.downvotes_label":"\u8e29","wiseclock-reply2see.forum.hidden_content":"\u9690\u85cf\u5185\u5bb9","wiseclock-reply2see.forum.reply_to_see":"{reply}\u5e76\u5237\u65b0\u540e\u53ef\u89c1","antoinefr-money.forum.user_controls.money_button":"\u4fee\u6539\u8d44\u4ea7","antoinefr-money.forum.modal.title":"{username} \u7684\u8d44\u4ea7","antoinefr-money.forum.modal.current":"\u76ee\u524d :","antoinefr-money.forum.modal.submit_button":"\u4fdd\u5b58\u66f4\u6539","johnhearfield-oauth-google.forum.log_in.with_google_button":"\u901a\u8fc7 Google \u5e10\u53f7\u767b\u5f55","wiseclock-post-copyright.forum.composer.authorized":"\u5141\u8bb8\u6388\u6743\u8f6c\u8f7d","wiseclock-post-copyright.forum.composer.sourced":"\u5141\u8bb8\u89c4\u8303\u8f6c\u8f7d","wiseclock-post-copyright.forum.composer.paid":"\u5141\u8bb8\u4ed8\u8d39\u8f6c\u8f7d","wiseclock-post-copyright.forum.composer.prohibited":"\u7981\u6b62\u8f6c\u8f7d","wiseclock-post-copyright.forum.composer.none":"\u4e0d\u8bbe\u7f6e\u7248\u6743","wiseclock-post-copyright.forum.post.authorized":"\u672c\u6587\u7ae0\u5141\u8bb8\u7ecf\u6388\u6743\u7684\u8f6c\u8f7d","wiseclock-post-copyright.forum.post.sourced":"\u672c\u6587\u7ae0\u5141\u8bb8\u89c4\u8303\u8f6c\u8f7d","wiseclock-post-copyright.forum.post.paid":"\u672c\u6587\u7ae0\u5141\u8bb8\u4ed8\u8d39\u8f6c\u8f7d","wiseclock-post-copyright.forum.post.prohibited":"\u672c\u6587\u7ae0\u7981\u6b62\u8f6c\u8f7d","wiseclock-login2see.forum.post":"{login}\u6216{register}\u540e\u53ef\u67e5\u770b\u5168\u6587","wiseclock-login2see.forum.link":"\u767b\u5f55\u540e\u53ef\u89c1","wiseclock-login2see.forum.image":"\u767b\u5f55\u540e\u53ef\u89c1","issyrocks12-filter.forum.flagger_name":"\u81ea\u52a8\u5ba1\u67e5","issyrocks12-filter.forum.flaged_text":"\u5305\u542b\u5df2\u5c01\u9501\u7684\u5b57\u7b26\u4e32","sijad-auth-steam.forum.log_in.with_steam_button":"\u901a\u8fc7 Steam \u5e10\u53f7\u767b\u5f55","pnobbe-oauth-discord.forum.log_in.with_discord_button":"\u901a\u8fc7 Discord \u5e10\u53f7\u767b\u5f55","davis-securehttps.forum.removed":"\u56e0\u8be5\u56fe\u7247\u6765\u81ea\u672a\u52a0\u5bc6\u7f51\u7edc\uff0c\u51fa\u4e8e\u5b89\u5168\u8003\u8651\u4e0d\u4e88\u663e\u793a\u3002","davis-securehttps.forum.show":"\u6211\u8981\u770b\u56fe","reflar-usermanagement.forum.post_controls.strike_button":"\u7ed9\u4e88\u8b66\u544a","reflar-usermanagement.forum.signup.age":"\u5e74\u9f84","reflar-usermanagement.forum.signup.gender":"\u6027\u522b","reflar-usermanagement.forum.signup.male":"\u7537","reflar-usermanagement.forum.signup.female":"\u5973","reflar-usermanagement.forum.signup.other":"\u5176\u5b83","reflar-usermanagement.forum.user.settings.button":"\u5e74\u9f84\u548c\u6027\u522b","reflar-usermanagement.forum.user.settings.title":"\u5e74\u9f84\u548c\u6027\u522b","reflar-usermanagement.forum.user.settings.save":"\u4fdd\u5b58","reflar-usermanagement.forum.user.settings.success":"\u4fdd\u5b58\u6210\u529f\u3002","reflar-usermanagement.forum.user.age":"\u5e74\u9f84: {age}","reflar-usermanagement.forum.user.controls.strike_button":"\u67e5\u770b\u8b66\u544a","reflar-usermanagement.forum.user.controls.activate_button":"\u6fc0\u6d3b\u7528\u6237","reflar-usermanagement.forum.user.controls.modal":"{username}\u7684\u8b66\u544a","reflar-usermanagement.forum.user.controls.previous":"{username}\u4e0a\u4e00\u8bb0\u5f55","reflar-usermanagement.forum.modal.post.title":"\u7ed9\u4e88\u8b66\u544a\u7ed9: {username}","reflar-usermanagement.forum.modal.post.reason_placeholder":"\u8b66\u544a\u7684\u539f\u56e0","reflar-usermanagement.forum.modal.post.strike_reason":"\u539f\u56e0","reflar-usermanagement.forum.modal.post.submit_button":"\u7ed9\u4e88\u8b66\u544a","reflar-usermanagement.forum.modal.view.number":"\u6570\u91cf","reflar-usermanagement.forum.modal.view.no_strikes":"\u7528\u6237\u7684\u8bb0\u5f55\u662f\u5e72\u51c0\u7684\uff01","reflar-usermanagement.forum.modal.view.content":"\u5e16\u5b50","reflar-usermanagement.forum.modal.view.actor":"\u7528\u6237","reflar-usermanagement.forum.modal.view.time":"\u65f6\u95f4","reflar-usermanagement.forum.modal.view.reason":"\u539f\u56e0","reflar-usermanagement.forum.modal.view.link":"\u94fe\u63a5","reflar-usermanagement.forum.modal.view.remove":"\u5220\u9664"};
moment.locale('zh', {
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  longDateFormat: {
    LT: 'Ah点mm分',
    LTS: 'Ah点m分s秒',
    L: 'YYYY-MM-DD',
    LL: 'YYYY年MMMD日',
    LLL: 'YYYY年MMMD日Ah点mm分',
    LLLL: 'YYYY年MMMD日 ddd H:mm:ss',
    l: 'YYYY-MM-DD',
    ll: 'YYYY年MMMD日',
    lll: 'YYYY年MMMD日Ah点mm分',
    llll: 'YYYY年MMMD日ddddAh点mm分'
  },
  meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
  meridiemHour: function (hour, meridiem) {
    if (hour === 12) {
      hour = 0;
    }
    if (meridiem === '凌晨' || meridiem === '早上' ||
        meridiem === '上午') {
      return hour;
    } else if (meridiem === '下午' || meridiem === '晚上') {
      return hour + 12;
    } else {
      // '中午'
      return hour >= 11 ? hour : hour + 12;
    }
  },
  meridiem: function (hour, minute, isLower) {
    var hm = hour * 100 + minute;
    if (hm < 600) {
      return '凌晨';
    } else if (hm < 900) {
      return '早上';
    } else if (hm < 1130) {
      return '上午';
    } else if (hm < 1230) {
      return '中午';
    } else if (hm < 1800) {
      return '下午';
    } else {
      return '晚上';
    }
  },
  calendar: {
    sameDay: function () {
      return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
    },
    nextDay: function () {
      return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
    },
    lastDay: function () {
      return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
    },
    nextWeek: function () {
      var startOfWeek, prefix;
      startOfWeek = moment().startOf('week');
      prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[下]' : '[本]';
      return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
    },
    lastWeek: function () {
      var startOfWeek, prefix;
      startOfWeek = moment().startOf('week');
      prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]';
      return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
    },
    sameElse: 'LL'
  },
  ordinalParse: /\d{1,2}(日|月|周)/,
  ordinal: function (number, period) {
    switch (period) {
      case 'd':
      case 'D':
      case 'DDD':
        return number + '日';
      case 'M':
        return number + '月';
      case 'w':
      case 'W':
        return number + '周';
      default:
        return number;
    }
  },
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '几秒',
    m: '1 分钟',
    mm: '%d 分钟',
    h: '1 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    M: '1 个月',
    MM: '%d 个月',
    y: '1 年',
    yy: '%d 年'
  },
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
});

            });
        }
    };
});;
