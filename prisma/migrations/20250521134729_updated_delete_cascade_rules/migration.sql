/*
  Warnings:

  - A unique constraint covering the columns `[user_id,team_id]` on the table `team_members` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "team_members" DROP CONSTRAINT "team_members_team_id_fkey";

-- DropForeignKey
ALTER TABLE "team_members" DROP CONSTRAINT "team_members_user_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "team_members_user_id_team_id_key" ON "team_members"("user_id", "team_id");

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team_members" ADD CONSTRAINT "team_members_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
