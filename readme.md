# Realtionship between the model

# 1. `UserModel` -The User model represents users in the system, storing their information and relationships with other users, posts, and comments.

# 2. `PostModel` -The Post model represents user-generated posts, including text, images, likes, and comments.

# 3. `CommentModel` -The Comment model stores comments made by users on posts.

# 4. `messsageModel` - This model is used to keep track of messages exchanged between users.

# 5.`conversationModel` – This model is used to keep track of conversations, including the sender and receiver details.

[Users] —(1)—〈creates〉—(N)— [Posts]

[Users] —(N)—〈likes〉—(N)— [Posts]

[Users] —(N)—〈follows〉—(N)— [Users]

[Users] —(1)—〈writes〉—(N)— [Comments]

[Posts] —(1)—〈has〉—(N)— [Comments]
