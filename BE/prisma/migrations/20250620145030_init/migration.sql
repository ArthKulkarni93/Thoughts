-- CreateTable
CREATE TABLE "msg" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "msg" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "msg_pkey" PRIMARY KEY ("id")
);
