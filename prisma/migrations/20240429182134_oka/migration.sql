-- CreateTable
CREATE TABLE "engine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "displacement" INTEGER NOT NULL,
    "horsepower" INTEGER NOT NULL,
    "torque" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "engine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "engine_name_key" ON "engine"("name");
