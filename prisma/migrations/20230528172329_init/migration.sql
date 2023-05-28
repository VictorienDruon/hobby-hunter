-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_follows" (
    "followerId" TEXT NOT NULL,
    "followingId" TEXT NOT NULL,

    CONSTRAINT "user_follows_pkey" PRIMARY KEY ("followerId","followingId")
);

-- CreateTable
CREATE TABLE "user_infos" (
    "id" TEXT NOT NULL,
    "job" TEXT,
    "bio" TEXT,
    "location" TEXT,
    "website" TEXT,
    "twitter" TEXT,
    "github" TEXT,
    "theme" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "user_infos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "musics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_musics" (
    "user_id" TEXT NOT NULL,
    "music_id" TEXT NOT NULL,

    CONSTRAINT "users_musics_pkey" PRIMARY KEY ("user_id","music_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_infos_user_id_key" ON "user_infos"("user_id");

-- AddForeignKey
ALTER TABLE "user_follows" ADD CONSTRAINT "user_follows_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_follows" ADD CONSTRAINT "user_follows_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_infos" ADD CONSTRAINT "user_infos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
