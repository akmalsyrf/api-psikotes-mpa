"use strict";
const { Category_character, Category_measurement } = require("../models");

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"category_measurements",
			[
				{
					name: "Pikiran",
				},
				{
					name: "Energi",
				},
				{
					name: "Sifat",
				},
				{
					name: "Taktik",
				},
				{
					name: "Identitas",
				},
			],
			{}
		);

		//get all Category_measurement
		let categoryMeasurementData = await Category_measurement.findAll();
		categoryMeasurementData = JSON.parse(JSON.stringify(categoryMeasurementData));

		//get id of Category_measurement
		const getIdCategoryMeasurement = (name) => {
			return categoryMeasurementData.filter((data) => data.name === name)[0].id;
		};

		await queryInterface.bulkInsert(
			"measurements",
			[
				{
					name: "Introvert",
					category_id: getIdCategoryMeasurement("Pikiran"),
				},
				{
					name: "Ekstrovert",
					category_id: getIdCategoryMeasurement("Pikiran"),
				},
				{
					name: "Realistik",
					category_id: getIdCategoryMeasurement("Energi"),
				},
				{
					name: "Visioner",
					category_id: getIdCategoryMeasurement("Energi"),
				},
				{
					name: "Emosional",
					category_id: getIdCategoryMeasurement("Sifat"),
				},
				{
					name: "Rasional",
					category_id: getIdCategoryMeasurement("Sifat"),
				},
				{
					name: "Improvisasi",
					category_id: getIdCategoryMeasurement("Taktik"),
				},
				{
					name: "Perencana",
					category_id: getIdCategoryMeasurement("Taktik"),
				},
				{
					name: "Tegas",
					category_id: getIdCategoryMeasurement("Identitas"),
				},
				{
					name: "Waspada",
					category_id: getIdCategoryMeasurement("Identitas"),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			"category_characters",
			[
				{
					name: "Analisis",
				},
				{
					name: "Diplomat",
				},
				{
					name: "Pengawal",
				},
				{
					name: "Penjelajah",
				},
			],
			{}
		);

		//get all category_character
		let categoryCharacterData = await Category_character.findAll();
		categoryCharacterData = JSON.parse(JSON.stringify(categoryCharacterData));

		//get id of category_character
		const getIdCategoryCharacter = (name) => {
			return categoryCharacterData.filter((data) => data.name === name)[0].id;
		};

		await queryInterface.bulkInsert(
			"character_personalities",
			[
				//analisis
				{
					name: "Arsitek",
					slug: "arsitek-a",
					category_id: getIdCategoryCharacter("Analisis"),
					code_character: "INTJ-A",
					description: "Pemikir yang imajinatif dan strategis, dengan rencana untuk segala sesuatunya.",
				},
				{
					name: "Arsitek",
					slug: "arsitek-t",
					category_id: getIdCategoryCharacter("Analisis"),
					code_character: "INTJ-T",
					description: "Pemikir yang imajinatif dan strategis, dengan rencana untuk segala sesuatunya.",
				},
				{
					name: "Ahli Logika",
					slug: "ahli-logika-a",
					category_id: getIdCategoryCharacter("Analisis"),
					code_character: "INTP-A",
					description: "Penemu yang inovatif dengan kedahagaan akan pengetahuan yang tidak ada habisnya.",
				},
				{
					name: "Ahli Logika",
					slug: "ahli-logika-t",
					category_id: getIdCategoryCharacter("Analisis"),
					code_character: "INTP-T",
					description: "Penemu yang inovatif dengan kedahagaan akan pengetahuan yang tidak ada habisnya.",
				},
				{
					name: "Komandan",
					slug: "komandan-a",
					category_id: getIdCategoryCharacter("Analisis"),
					code_character: "ENTJ-A",
					description: "Pemimpin yang pemberani, imaginatif dan berkemauan kuat, selalu menemukan cara - atau menciptakan cara.",
				},
				{
					name: "Komandan",
					slug: "komandan-t",
					category_id: getIdCategoryCharacter("Analisis"),
					code_character: "ENTJ-T",
					description: "Pemimpin yang pemberani, imaginatif dan berkemauan kuat, selalu menemukan cara - atau menciptakan cara.",
				},
				{
					name: "Pendebat",
					slug: "pendebat-a",
					category_id: getIdCategoryCharacter("Analisis"),
					code_character: "ENTP-A",
					description: "Pemikir yang cerdas dan serius yang gatal terhadap tantangan intelektual.",
				},
				{
					name: "Pendebat",
					slug: "pendebat-t",
					category_id: getIdCategoryCharacter("Analisis"),
					code_character: "ENTP-T",
					description: "Pemikir yang cerdas dan serius yang gatal terhadap tantangan intelektual.",
				},

				//diplomat
				{
					name: "Advokat",
					slug: "advokat-a",
					category_id: getIdCategoryCharacter("Diplomat"),
					code_character: "INFJ-A",
					description: "Pendiam dan mistis, tetapi idealis yang sangat menginspirasi dan tak kenal lelah.",
				},
				{
					name: "Advokat",
					slug: "advokat-t",
					category_id: getIdCategoryCharacter("Diplomat"),
					code_character: "INFJ-T",
					description: "Pendiam dan mistis, tetapi idealis yang sangat menginspirasi dan tak kenal lelah.",
				},
				{
					name: "Mediator",
					slug: "mediator-a",
					category_id: getIdCategoryCharacter("Diplomat"),
					code_character: "INFP-A",
					description: "Orang yang puitis, baik hati dan altruisik, selalu ingin membantu aksi kebaikan.",
				},
				{
					name: "Mediator",
					slug: "mediator-t",
					category_id: getIdCategoryCharacter("Diplomat"),
					code_character: "INFP-T",
					description: "Orang yang puitis, baik hati dan altruisik, selalu ingin membantu aksi kebaikan.",
				},
				{
					name: "Protagonis",
					slug: "protagonis-a",
					category_id: getIdCategoryCharacter("Diplomat"),
					code_character: "ENFJ-A",
					description: "Pemimpin yang karismatik dan menginspirasi, mampu memukai pendengarnya.",
				},
				{
					name: "Protagonis",
					slug: "protagonis-t",
					category_id: getIdCategoryCharacter("Diplomat"),
					code_character: "ENFJ-T",
					description: "Pemimpin yang karismatik dan menginspirasi, mampu memukai pendengarnya.",
				},
				{
					name: "Juru Kampanye",
					slug: "juru-kampanye-a",
					category_id: getIdCategoryCharacter("Diplomat"),
					code_character: "ENFP-A",
					description: "Semangat yang antusias, kreatif dan bebas bergaul, yang selalu dapat menemukan alasan untuk tersenyum.",
				},
				{
					name: "Juru Kampanye",
					slug: "juru-kampanye-t",
					category_id: getIdCategoryCharacter("Diplomat"),
					code_character: "ENFP-T",
					description: "Semangat yang antusias, kreatif dan bebas bergaul, yang selalu dapat menemukan alasan untuk tersenyum.",
				},

				//pengawal
				{
					name: "Ahli Logistik",
					slug: "ahli-logistik-a",
					category_id: getIdCategoryCharacter("Pengawal"),
					code_character: "ISTJ-A",
					description: "Individu yang praktis dan mengutamakan fakta, yang keandalannya tidak dapat diragukan.",
				},
				{
					name: "Ahli Logistik",
					slug: "ahli-logistik-t",
					category_id: getIdCategoryCharacter("Pengawal"),
					code_character: "ISTJ-T",
					description: "Individu yang praktis dan mengutamakan fakta, yang keandalannya tidak dapat diragukan.",
				},
				{
					name: "Pembela",
					slug: "pembela-a",
					category_id: getIdCategoryCharacter("Pengawal"),
					code_character: "ISFJ-A",
					description: "Pelindung yang sangat berdedikasi dan hangat, selalu siap membela orang yang dicintainya.",
				},
				{
					name: "Pembela",
					slug: "pembela-t",
					category_id: getIdCategoryCharacter("Pengawal"),
					code_character: "ISFJ-T",
					description: "Pelindung yang sangat berdedikasi dan hangat, selalu siap membela orang yang dicintainya.",
				},
				{
					name: "Eksekutif",
					slug: "eksekutif-a",
					category_id: getIdCategoryCharacter("Pengawal"),
					code_character: "ESTJ-A",
					description: "Administrator istimewa, tidak ada duanya dalam mengelola sesuatu - atau orang.",
				},
				{
					name: "Eksekutif",
					slug: "eksekutif-t",
					category_id: getIdCategoryCharacter("Pengawal"),
					code_character: "ESTJ-T",
					description: "Administrator istimewa, tidak ada duanya dalam mengelola sesuatu - atau orang.",
				},
				{
					name: "Konsul",
					slug: "konsul-a",
					category_id: getIdCategoryCharacter("Pengawal"),
					code_character: "ESFJ-A",
					description: "Orang yang sangat peduli, sosial dan populer, selalu ingin membantu.",
				},
				{
					name: "Konsul",
					slug: "konsul-t",
					category_id: getIdCategoryCharacter("Pengawal"),
					code_character: "ESFJ-T",
					description: "Orang yang sangat peduli, sosial dan populer, selalu ingin membantu.",
				},

				//penjelajah
				{
					name: "Virtuoso",
					slug: "virtuoso-a",
					category_id: getIdCategoryCharacter("Penjelajah"),
					code_character: "ISTP-A",
					description: "Eksperimenter yang pemberani dan praktis, menguasai semua jenis alat.",
				},
				{
					name: "Virtuoso",
					slug: "virtuoso-t",
					category_id: getIdCategoryCharacter("Penjelajah"),
					code_character: "ISTP-T",
					description: "Eksperimenter yang pemberani dan praktis, menguasai semua jenis alat.",
				},
				{
					name: "Petualang",
					slug: "petualang-a",
					category_id: getIdCategoryCharacter("Penjelajah"),
					code_character: "ISFP-A",
					description: "Seniman yang fleksibel dan mengagumkan, selalu siap menjelajahi dan mengalami hal baru.",
				},
				{
					name: "Petualang",
					slug: "petualang-t",
					category_id: getIdCategoryCharacter("Penjelajah"),
					code_character: "ISFP-T",
					description: "Seniman yang fleksibel dan mengagumkan, selalu siap menjelajahi dan mengalami hal baru.",
				},
				{
					name: "Pengusaha",
					slug: "pengusaha-a",
					category_id: getIdCategoryCharacter("Penjelajah"),
					code_character: "ESTP-A",
					description: "Orang yang cerdas, bersemangan dan sangat tanggap, yang benar-benar menikmati hidup yang menantang.",
				},
				{
					name: "Pengusaha",
					slug: "pengusaha-t",
					category_id: getIdCategoryCharacter("Penjelajah"),
					code_character: "ESTP-T",
					description: "Orang yang cerdas, bersemangan dan sangat tanggap, yang benar-benar menikmati hidup yang menantang.",
				},
				{
					name: "Penghibur",
					slug: "penghibur-a",
					category_id: getIdCategoryCharacter("Penjelajah"),
					code_character: "ESFP-A",
					description: "Orang yang spontan, bersemangan dan antusias - hidup tidak akan membosankan saat berdekatan dengan mereka.",
				},
				{
					name: "Penghibur",
					slug: "penghibur-t",
					category_id: getIdCategoryCharacter("Penjelajah"),
					code_character: "ESFP-T",
					description: "Orang yang spontan, bersemangan dan antusias - hidup tidak akan membosankan saat berdekatan dengan mereka.",
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			"charhasmeas",
			[
				{
					character_id: 1,
					measurement_id: 1,
				},
				{
					character_id: 1,
					measurement_id: 4,
				},
				{
					character_id: 1,
					measurement_id: 6,
				},
				{
					character_id: 1,
					measurement_id: 8,
				},
				{
					character_id: 1,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 2,
					measurement_id: 1,
				},
				{
					character_id: 2,
					measurement_id: 4,
				},
				{
					character_id: 2,
					measurement_id: 6,
				},
				{
					character_id: 2,
					measurement_id: 8,
				},
				{
					character_id: 2,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 3,
					measurement_id: 1,
				},
				{
					character_id: 3,
					measurement_id: 4,
				},
				{
					character_id: 3,
					measurement_id: 6,
				},
				{
					character_id: 3,
					measurement_id: 7,
				},
				{
					character_id: 3,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 4,
					measurement_id: 1,
				},
				{
					character_id: 4,
					measurement_id: 4,
				},
				{
					character_id: 4,
					measurement_id: 6,
				},
				{
					character_id: 4,
					measurement_id: 7,
				},
				{
					character_id: 4,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 5,
					measurement_id: 2,
				},
				{
					character_id: 5,
					measurement_id: 4,
				},
				{
					character_id: 5,
					measurement_id: 6,
				},
				{
					character_id: 5,
					measurement_id: 8,
				},
				{
					character_id: 5,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 6,
					measurement_id: 2,
				},
				{
					character_id: 6,
					measurement_id: 4,
				},
				{
					character_id: 6,
					measurement_id: 6,
				},
				{
					character_id: 6,
					measurement_id: 8,
				},
				{
					character_id: 6,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 7,
					measurement_id: 2,
				},
				{
					character_id: 7,
					measurement_id: 4,
				},
				{
					character_id: 7,
					measurement_id: 6,
				},
				{
					character_id: 7,
					measurement_id: 7,
				},
				{
					character_id: 7,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 8,
					measurement_id: 2,
				},
				{
					character_id: 8,
					measurement_id: 4,
				},
				{
					character_id: 8,
					measurement_id: 6,
				},
				{
					character_id: 8,
					measurement_id: 7,
				},
				{
					character_id: 8,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 9,
					measurement_id: 1,
				},
				{
					character_id: 9,
					measurement_id: 4,
				},
				{
					character_id: 9,
					measurement_id: 5,
				},
				{
					character_id: 9,
					measurement_id: 8,
				},
				{
					character_id: 9,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 10,
					measurement_id: 1,
				},
				{
					character_id: 10,
					measurement_id: 4,
				},
				{
					character_id: 10,
					measurement_id: 5,
				},
				{
					character_id: 10,
					measurement_id: 8,
				},
				{
					character_id: 10,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 11,
					measurement_id: 1,
				},
				{
					character_id: 11,
					measurement_id: 4,
				},
				{
					character_id: 11,
					measurement_id: 5,
				},
				{
					character_id: 11,
					measurement_id: 7,
				},
				{
					character_id: 11,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 12,
					measurement_id: 1,
				},
				{
					character_id: 12,
					measurement_id: 4,
				},
				{
					character_id: 12,
					measurement_id: 5,
				},
				{
					character_id: 12,
					measurement_id: 7,
				},
				{
					character_id: 12,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 13,
					measurement_id: 2,
				},
				{
					character_id: 13,
					measurement_id: 4,
				},
				{
					character_id: 13,
					measurement_id: 5,
				},
				{
					character_id: 13,
					measurement_id: 8,
				},
				{
					character_id: 13,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 14,
					measurement_id: 2,
				},
				{
					character_id: 14,
					measurement_id: 4,
				},
				{
					character_id: 14,
					measurement_id: 5,
				},
				{
					character_id: 14,
					measurement_id: 8,
				},
				{
					character_id: 14,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 15,
					measurement_id: 2,
				},
				{
					character_id: 15,
					measurement_id: 4,
				},
				{
					character_id: 15,
					measurement_id: 5,
				},
				{
					character_id: 15,
					measurement_id: 7,
				},
				{
					character_id: 15,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 16,
					measurement_id: 2,
				},
				{
					character_id: 16,
					measurement_id: 4,
				},
				{
					character_id: 16,
					measurement_id: 5,
				},
				{
					character_id: 16,
					measurement_id: 7,
				},
				{
					character_id: 16,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 17,
					measurement_id: 1,
				},
				{
					character_id: 17,
					measurement_id: 3,
				},
				{
					character_id: 17,
					measurement_id: 6,
				},
				{
					character_id: 17,
					measurement_id: 8,
				},
				{
					character_id: 17,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 18,
					measurement_id: 1,
				},
				{
					character_id: 18,
					measurement_id: 3,
				},
				{
					character_id: 18,
					measurement_id: 6,
				},
				{
					character_id: 18,
					measurement_id: 8,
				},
				{
					character_id: 18,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 19,
					measurement_id: 1,
				},
				{
					character_id: 19,
					measurement_id: 3,
				},
				{
					character_id: 19,
					measurement_id: 5,
				},
				{
					character_id: 19,
					measurement_id: 8,
				},
				{
					character_id: 19,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 20,
					measurement_id: 1,
				},
				{
					character_id: 20,
					measurement_id: 3,
				},
				{
					character_id: 20,
					measurement_id: 5,
				},
				{
					character_id: 20,
					measurement_id: 8,
				},
				{
					character_id: 20,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 21,
					measurement_id: 2,
				},
				{
					character_id: 21,
					measurement_id: 3,
				},
				{
					character_id: 21,
					measurement_id: 6,
				},
				{
					character_id: 21,
					measurement_id: 8,
				},
				{
					character_id: 21,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 22,
					measurement_id: 2,
				},
				{
					character_id: 22,
					measurement_id: 3,
				},
				{
					character_id: 22,
					measurement_id: 6,
				},
				{
					character_id: 22,
					measurement_id: 8,
				},
				{
					character_id: 22,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 23,
					measurement_id: 2,
				},
				{
					character_id: 23,
					measurement_id: 4,
				},
				{
					character_id: 23,
					measurement_id: 5,
				},
				{
					character_id: 23,
					measurement_id: 8,
				},
				{
					character_id: 23,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 24,
					measurement_id: 2,
				},
				{
					character_id: 24,
					measurement_id: 4,
				},
				{
					character_id: 24,
					measurement_id: 5,
				},
				{
					character_id: 24,
					measurement_id: 8,
				},
				{
					character_id: 24,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 25,
					measurement_id: 1,
				},
				{
					character_id: 25,
					measurement_id: 4,
				},
				{
					character_id: 25,
					measurement_id: 6,
				},
				{
					character_id: 25,
					measurement_id: 7,
				},
				{
					character_id: 25,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 26,
					measurement_id: 1,
				},
				{
					character_id: 26,
					measurement_id: 4,
				},
				{
					character_id: 26,
					measurement_id: 6,
				},
				{
					character_id: 26,
					measurement_id: 7,
				},
				{
					character_id: 26,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 27,
					measurement_id: 1,
				},
				{
					character_id: 27,
					measurement_id: 4,
				},
				{
					character_id: 27,
					measurement_id: 5,
				},
				{
					character_id: 27,
					measurement_id: 7,
				},
				{
					character_id: 27,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 28,
					measurement_id: 1,
				},
				{
					character_id: 28,
					measurement_id: 4,
				},
				{
					character_id: 28,
					measurement_id: 5,
				},
				{
					character_id: 28,
					measurement_id: 7,
				},
				{
					character_id: 28,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 29,
					measurement_id: 2,
				},
				{
					character_id: 29,
					measurement_id: 4,
				},
				{
					character_id: 29,
					measurement_id: 6,
				},
				{
					character_id: 29,
					measurement_id: 7,
				},
				{
					character_id: 29,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 30,
					measurement_id: 2,
				},
				{
					character_id: 30,
					measurement_id: 4,
				},
				{
					character_id: 30,
					measurement_id: 6,
				},
				{
					character_id: 30,
					measurement_id: 7,
				},
				{
					character_id: 29,
					measurement_id: 10,
				},

				/**------------------------------------------------ */

				{
					character_id: 31,
					measurement_id: 2,
				},
				{
					character_id: 31,
					measurement_id: 4,
				},
				{
					character_id: 31,
					measurement_id: 4,
				},
				{
					character_id: 31,
					measurement_id: 7,
				},
				{
					character_id: 31,
					measurement_id: 9,
				},

				/**------------------------------------------------ */

				{
					character_id: 32,
					measurement_id: 2,
				},
				{
					character_id: 32,
					measurement_id: 4,
				},
				{
					character_id: 32,
					measurement_id: 4,
				},
				{
					character_id: 32,
					measurement_id: 7,
				},
				{
					character_id: 32,
					measurement_id: 10,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
