-- CreateTable
CREATE TABLE "engine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "displacement" INTEGER NOT NULL,
    "horsepower" INTEGER NOT NULL,
    "torque" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "engine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carModel" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "engineId" INTEGER NOT NULL,

    CONSTRAINT "carModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "engine_name_key" ON "engine"("name");

-- AddForeignKey
ALTER TABLE "carModel" ADD CONSTRAINT "carModel_engineId_fkey" FOREIGN KEY ("engineId") REFERENCES "engine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
