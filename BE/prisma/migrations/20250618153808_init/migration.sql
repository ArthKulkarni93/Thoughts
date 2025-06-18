/*
  Warnings:

  - A unique constraint covering the columns `[likeId,likedPostId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Like_likeId_likedPostId_key" ON "Like"("likeId", "likedPostId");
