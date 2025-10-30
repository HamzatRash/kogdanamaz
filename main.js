/*
1. Найти универсальные шрифты для любого браузера и телефона
2. Сделать времена через таблицу чтобы вставлялась вторая строка
3. Сделать сверху плашку Расписание на "день"
4. Сделать счетчик по типу До след. намаза осталось...


*/

const prayerTime = {
    "01.01": { fajr: "05:54", sunrise: "07:23", zuhr: "12:15", asr: "14:15", magrib: "16:33", isha: "18:03" },
    "02.01": { fajr: "05:54", sunrise: "07:23", zuhr: "12:15", asr: "14:16", magrib: "16:34", isha: "18:04" },
    "03.01": { fajr: "05:54", sunrise: "07:23", zuhr: "12:15", asr: "14:16", magrib: "16:35", isha: "18:05" },
    "04.01": { fajr: "05:53", sunrise: "07:23", zuhr: "12:15", asr: "14:17", magrib: "16:36", isha: "18:06" },
    "05.01": { fajr: "05:53", sunrise: "07:23", zuhr: "12:15", asr: "14:18", magrib: "16:37", isha: "18:07" },
    "06.01": { fajr: "05:52", sunrise: "07:23", zuhr: "12:15", asr: "14:19", magrib: "16:38", isha: "18:08" },
    "07.01": { fajr: "05:52", sunrise: "07:23", zuhr: "12:15", asr: "14:20", magrib: "16:39", isha: "18:09" },
    "08.01": { fajr: "05:51", sunrise: "07:23", zuhr: "12:15", asr: "14:21", magrib: "16:40", isha: "18:10" },
    "09.01": { fajr: "05:51", sunrise: "07:23", zuhr: "12:15", asr: "14:22", magrib: "16:41", isha: "18:11" },
    "10.01": { fajr: "05:51", sunrise: "07:22", zuhr: "12:15", asr: "14:23", magrib: "16:42", isha: "18:12" },
    "11.01": { fajr: "05:50", sunrise: "07:22", zuhr: "12:15", asr: "14:24", magrib: "16:43", isha: "18:13" },
    "12.01": { fajr: "05:50", sunrise: "07:22", zuhr: "12:15", asr: "14:25", magrib: "16:44", isha: "18:14" },
    "13.01": { fajr: "05:50", sunrise: "07:21", zuhr: "12:15", asr: "14:26", magrib: "16:45", isha: "18:15" },
    "14.01": { fajr: "05:50", sunrise: "07:21", zuhr: "12:15", asr: "14:27", magrib: "16:46", isha: "18:16" },
    "15.01": { fajr: "05:50", sunrise: "07:20", zuhr: "12:15", asr: "14:28", magrib: "16:48", isha: "18:18" },
    "16.01": { fajr: "05:49", sunrise: "07:20", zuhr: "12:15", asr: "14:29", magrib: "16:49", isha: "18:19" },
    "17.01": { fajr: "05:48", sunrise: "07:19", zuhr: "12:15", asr: "14:30", magrib: "16:50", isha: "18:20" },
    "18.01": { fajr: "05:47", sunrise: "07:19", zuhr: "12:15", asr: "14:31", magrib: "16:51", isha: "18:21" },
    "19.01": { fajr: "05:45", sunrise: "07:18", zuhr: "12:15", asr: "14:32", magrib: "16:53", isha: "18:23" },
    "20.01": { fajr: "05:45", sunrise: "07:18", zuhr: "12:15", asr: "14:33", magrib: "16:54", isha: "18:24" },
    "21.01": { fajr: "05:43", sunrise: "07:17", zuhr: "12:15", asr: "14:34", magrib: "16:55", isha: "18:25" },
    "22.01": { fajr: "05:43", sunrise: "07:16", zuhr: "12:15", asr: "14:35", magrib: "16:56", isha: "18:26" },
    "23.01": { fajr: "05:42", sunrise: "07:15", zuhr: "12:15", asr: "14:36", magrib: "16:58", isha: "18:28" },
    "24.01": { fajr: "05:42", sunrise: "07:15", zuhr: "12:15", asr: "14:37", magrib: "16:59", isha: "18:29" },
    "25.01": { fajr: "05:40", sunrise: "07:14", zuhr: "12:15", asr: "14:38", magrib: "17:00", isha: "18:30" },
    "26.01": { fajr: "05:40", sunrise: "07:13", zuhr: "12:15", asr: "14:40", magrib: "17:02", isha: "18:32" },
    "27.01": { fajr: "05:40", sunrise: "07:12", zuhr: "12:15", asr: "14:41", magrib: "17:03", isha: "18:33" },
    "28.01": { fajr: "05:39", sunrise: "07:11", zuhr: "12:15", asr: "14:42", magrib: "17:04", isha: "18:34" },
    "29.01": { fajr: "05:38", sunrise: "07:10", zuhr: "12:15", asr: "14:43", magrib: "17:06", isha: "18:36" },
    "30.01": { fajr: "05:37", sunrise: "07:09", zuhr: "12:15", asr: "14:44", magrib: "17:07", isha: "18:37" },
    "31.01": { fajr: "05:37", sunrise: "07:08", zuhr: "12:15", asr: "14:45", magrib: "17:08", isha: "18:38" },
    "01.02": { fajr: "05:37", sunrise: "07:07", zuhr: "12:15", asr: "14:46", magrib: "17:10", isha: "18:40" },
    "02.02": { fajr: "05:37", sunrise: "07:06", zuhr: "12:15", asr: "14:47", magrib: "17:11", isha: "18:41" },
    "03.02": { fajr: "05:37", sunrise: "07:05", zuhr: "12:15", asr: "14:48", magrib: "17:12", isha: "18:42" },
    "04.02": { fajr: "05:35", sunrise: "07:04", zuhr: "12:15", asr: "14:49", magrib: "17:14", isha: "18:44" },
    "05.02": { fajr: "05:33", sunrise: "07:03", zuhr: "12:15", asr: "14:51", magrib: "17:15", isha: "18:45" },
    "06.02": { fajr: "05:30", sunrise: "07:02", zuhr: "12:15", asr: "14:52", magrib: "17:16", isha: "18:46" },
    "07.02": { fajr: "05:28", sunrise: "07:00", zuhr: "12:15", asr: "14:53", magrib: "17:18", isha: "18:48" },
    "08.02": { fajr: "05:26", sunrise: "06:59", zuhr: "12:15", asr: "14:54", magrib: "17:19", isha: "18:49" },
    "09.02": { fajr: "05:25", sunrise: "06:58", zuhr: "12:15", asr: "14:55", magrib: "17:20", isha: "18:50" },
    "10.02": { fajr: "05:23", sunrise: "06:57", zuhr: "12:15", asr: "14:56", magrib: "17:22", isha: "18:52" },
    "11.02": { fajr: "05:22", sunrise: "06:55", zuhr: "12:15", asr: "14:57", magrib: "17:23", isha: "18:53" },
    "12.02": { fajr: "05:20", sunrise: "06:54", zuhr: "12:15", asr: "14:58", magrib: "17:24", isha: "18:54" },
    "13.02": { fajr: "05:20", sunrise: "06:53", zuhr: "12:15", asr: "14:59", magrib: "17:26", isha: "18:56" },
    "14.02": { fajr: "05:20", sunrise: "06:51", zuhr: "12:15", asr: "15:00", magrib: "17:27", isha: "18:57" },
    "15.02": { fajr: "05:18", sunrise: "06:50", zuhr: "12:15", asr: "15:01", magrib: "17:28", isha: "18:58" },
    "16.02": { fajr: "05:16", sunrise: "06:48", zuhr: "12:15", asr: "15:02", magrib: "17:30", isha: "19:00" },
    "17.02": { fajr: "05:15", sunrise: "06:47", zuhr: "12:15", asr: "15:03", magrib: "17:31", isha: "19:01" },
    "18.02": { fajr: "05:15", sunrise: "06:45", zuhr: "12:15", asr: "15:04", magrib: "17:32", isha: "19:02" },
    "19.02": { fajr: "05:15", sunrise: "06:44", zuhr: "12:15", asr: "15:05", magrib: "17:34", isha: "19:04" },
    "20.02": { fajr: "05:15", sunrise: "06:42", zuhr: "12:15", asr: "15:06", magrib: "17:35", isha: "19:05" },
    "21.02": { fajr: "05:12", sunrise: "06:41", zuhr: "12:15", asr: "15:07", magrib: "17:36", isha: "19:06" },
    "22.02": { fajr: "05:10", sunrise: "06:39", zuhr: "12:15", asr: "15:08", magrib: "17:38", isha: "19:08" },
    "23.02": { fajr: "05:10", sunrise: "06:38", zuhr: "12:15", asr: "15:09", magrib: "17:39", isha: "19:09" },
    "24.02": { fajr: "05:08", sunrise: "06:36", zuhr: "12:15", asr: "15:10", magrib: "17:40", isha: "19:10" },
    "25.02": { fajr: "05:08", sunrise: "06:35", zuhr: "12:15", asr: "15:11", magrib: "17:41", isha: "19:11" },
    "26.02": { fajr: "05:07", sunrise: "06:33", zuhr: "12:15", asr: "15:12", magrib: "17:43", isha: "19:13" },
    "27.02": { fajr: "05:06", sunrise: "06:31", zuhr: "12:15", asr: "15:13", magrib: "17:44", isha: "19:14" },
    "28.02": { fajr: "05:06", sunrise: "06:30", zuhr: "12:15", asr: "15:14", magrib: "17:45", isha: "19:15" },
    "29.02": { fajr: "05:05", sunrise: "06:29", zuhr: "12:15", asr: "15:14", magrib: "17:46", isha: "19:16" },
    "01.03": { fajr: "04:57", sunrise: "06:28", zuhr: "12:15", asr: "15:14", magrib: "17:47", isha: "19:17" },
    "02.03": { fajr: "04:56", sunrise: "06:27", zuhr: "12:15", asr: "15:15", magrib: "17:48", isha: "19:18" },
    "03.03": { fajr: "04:55", sunrise: "06:25", zuhr: "12:15", asr: "15:16", magrib: "17:49", isha: "19:19" },
    "04.03": { fajr: "04:53", sunrise: "06:23", zuhr: "12:15", asr: "15:17", magrib: "17:50", isha: "19:20" },
    "05.03": { fajr: "04:51", sunrise: "06:22", zuhr: "12:15", asr: "15:18", magrib: "17:52", isha: "19:22" },
    "06.03": { fajr: "04:50", sunrise: "06:20", zuhr: "12:15", asr: "15:19", magrib: "17:53", isha: "19:23" },
    "07.03": { fajr: "04:50", sunrise: "06:18", zuhr: "12:15", asr: "15:19", magrib: "17:54", isha: "19:24" },
    "08.03": { fajr: "04:50", sunrise: "06:16", zuhr: "12:15", asr: "15:20", magrib: "17:55", isha: "19:25" },
    "09.03": { fajr: "04:49", sunrise: "06:15", zuhr: "12:15", asr: "15:21", magrib: "17:56", isha: "19:26" },
    "10.03": { fajr: "04:48", sunrise: "06:13", zuhr: "12:15", asr: "15:22", magrib: "17:58", isha: "19:28" },
    "11.03": { fajr: "04:46", sunrise: "06:11", zuhr: "12:15", asr: "15:23", magrib: "17:59", isha: "19:29" },
    "12.03": { fajr: "04:45", sunrise: "06:10", zuhr: "12:15", asr: "15:23", magrib: "18:00", isha: "19:30" },
    "13.03": { fajr: "04:43", sunrise: "06:08", zuhr: "12:15", asr: "15:24", magrib: "18:01", isha: "19:31" },
    "14.03": { fajr: "04:42", sunrise: "06:06", zuhr: "12:15", asr: "15:25", magrib: "18:03", isha: "19:33" },
    "15.03": { fajr: "04:41", sunrise: "06:04", zuhr: "12:15", asr: "15:25", magrib: "18:04", isha: "19:34" },
    "16.03": { fajr: "04:38", sunrise: "06:03", zuhr: "12:15", asr: "15:26", magrib: "18:05", isha: "19:35" },
    "17.03": { fajr: "04:35", sunrise: "06:01", zuhr: "12:15", asr: "15:27", magrib: "18:06", isha: "19:36" },
    "18.03": { fajr: "04:33", sunrise: "05:59", zuhr: "12:15", asr: "15:27", magrib: "18:07", isha: "19:37" },
    "19.03": { fajr: "04:30", sunrise: "05:57", zuhr: "12:15", asr: "15:28", magrib: "18:09", isha: "19:39" },
    "20.03": { fajr: "04:29", sunrise: "05:55", zuhr: "12:15", asr: "15:29", magrib: "18:10", isha: "19:40" },
    "21.03": { fajr: "04:29", sunrise: "05:54", zuhr: "12:15", asr: "15:29", magrib: "18:11", isha: "19:41" },
    "22.03": { fajr: "04:28", sunrise: "05:52", zuhr: "12:15", asr: "15:30", magrib: "18:12", isha: "19:42" },
    "23.03": { fajr: "04:25", sunrise: "05:50", zuhr: "12:15", asr: "15:31", magrib: "18:13", isha: "19:43" },
    "24.03": { fajr: "04:23", sunrise: "05:48", zuhr: "12:15", asr: "15:31", magrib: "18:15", isha: "19:45" },
    "25.03": { fajr: "04:20", sunrise: "05:47", zuhr: "12:15", asr: "15:32", magrib: "18:16", isha: "19:46" },
    "26.03": { fajr: "04:20", sunrise: "05:45", zuhr: "12:15", asr: "15:32", magrib: "18:17", isha: "19:47" },
    "27.03": { fajr: "04:18", sunrise: "05:43", zuhr: "12:15", asr: "15:33", magrib: "18:18", isha: "19:48" },
    "28.03": { fajr: "04:18", sunrise: "05:41", zuhr: "12:15", asr: "15:34", magrib: "18:19", isha: "19:49" },
    "29.03": { fajr: "04:17", sunrise: "05:39", zuhr: "12:15", asr: "15:34", magrib: "18:20", isha: "19:50" },
    "30.03": { fajr: "04:17", sunrise: "05:38", zuhr: "12:15", asr: "15:35", magrib: "18:22", isha: "19:52" },
    "31.03": { fajr: "04:17", sunrise: "05:36", zuhr: "12:15", asr: "15:35", magrib: "18:23", isha: "19:53" },
    "01.04": { fajr: "04:15", sunrise: "05:34", zuhr: "12:15", asr: "15:36", magrib: "18:24", isha: "19:54" },
    "02.04": { fajr: "04:12", sunrise: "05:32", zuhr: "12:15", asr: "15:36", magrib: "18:25", isha: "19:55" },
    "03.04": { fajr: "04:10", sunrise: "05:31", zuhr: "12:15", asr: "15:37", magrib: "18:26", isha: "19:56" },
    "04.04": { fajr: "04:10", sunrise: "05:29", zuhr: "12:15", asr: "15:37", magrib: "18:27", isha: "19:57" },
    "05.04": { fajr: "04:08", sunrise: "05:27", zuhr: "12:15", asr: "15:38", magrib: "18:29", isha: "19:59" },
    "06.04": { fajr: "04:05", sunrise: "05:25", zuhr: "12:15", asr: "15:38", magrib: "18:30", isha: "20:00" },
    "07.04": { fajr: "04:03", sunrise: "05:24", zuhr: "12:15", asr: "15:39", magrib: "18:31", isha: "20:01" },
    "08.04": { fajr: "04:02", sunrise: "05:22", zuhr: "12:15", asr: "15:39", magrib: "18:32", isha: "20:02" },
    "09.04": { fajr: "03:57", sunrise: "05:20", zuhr: "12:15", asr: "15:40", magrib: "18:33", isha: "20:03" },
    "10.04": { fajr: "03:55", sunrise: "05:18", zuhr: "12:15", asr: "15:40", magrib: "18:34", isha: "20:04" },
    "11.04": { fajr: "03:53", sunrise: "05:17", zuhr: "12:15", asr: "15:41", magrib: "18:36", isha: "20:06" },
    "12.04": { fajr: "03:52", sunrise: "05:15", zuhr: "12:15", asr: "15:41", magrib: "18:37", isha: "20:07" },
    "13.04": { fajr: "03:52", sunrise: "05:13", zuhr: "12:15", asr: "15:42", magrib: "18:38", isha: "20:08" },
    "14.04": { fajr: "03:50", sunrise: "05:12", zuhr: "12:15", asr: "15:42", magrib: "18:39", isha: "20:09" },
    "15.04": { fajr: "03:48", sunrise: "05:10", zuhr: "12:15", asr: "15:43", magrib: "18:40", isha: "20:10" },
    "16.04": { fajr: "03:45", sunrise: "05:08", zuhr: "12:15", asr: "15:43", magrib: "18:41", isha: "20:11" },
    "17.04": { fajr: "03:43", sunrise: "05:07", zuhr: "12:15", asr: "15:43", magrib: "18:43", isha: "20:13" },
    "18.04": { fajr: "03:40", sunrise: "05:05", zuhr: "12:15", asr: "15:44", magrib: "18:44", isha: "20:14" },
    "19.04": { fajr: "03:37", sunrise: "05:03", zuhr: "12:15", asr: "15:44", magrib: "18:45", isha: "20:15" },
    "20.04": { fajr: "03:35", sunrise: "05:02", zuhr: "12:15", asr: "15:45", magrib: "18:46", isha: "20:18" },
    "21.04": { fajr: "03:33", sunrise: "05:00", zuhr: "12:15", asr: "15:45", magrib: "18:47", isha: "20:20" },
    "22.04": { fajr: "03:30", sunrise: "04:59", zuhr: "12:15", asr: "15:45", magrib: "18:49", isha: "20:22" },
    "23.04": { fajr: "03:28", sunrise: "04:57", zuhr: "12:15", asr: "15:46", magrib: "18:50", isha: "20:24" },
    "24.04": { fajr: "03:25", sunrise: "04:56", zuhr: "12:15", asr: "15:46", magrib: "18:51", isha: "20:26" },
    "25.04": { fajr: "03:25", sunrise: "04:54", zuhr: "12:15", asr: "15:47", magrib: "18:52", isha: "20:28" },
    "26.04": { fajr: "03:23", sunrise: "04:53", zuhr: "12:15", asr: "15:47", magrib: "18:53", isha: "20:30" },
    "27.04": { fajr: "03:23", sunrise: "04:51", zuhr: "12:15", asr: "15:47", magrib: "18:54", isha: "20:34" },
    "28.04": { fajr: "03:23", sunrise: "04:50", zuhr: "12:15", asr: "15:48", magrib: "18:55", isha: "20:35" },
    "29.04": { fajr: "03:20", sunrise: "04:48", zuhr: "12:15", asr: "15:48", magrib: "18:57", isha: "20:37" },
    "30.04": { fajr: "03:20", sunrise: "04:47", zuhr: "12:15", asr: "15:49", magrib: "18:58", isha: "20:38" },
    "01.05": { fajr: "03:15", sunrise: "04:45", zuhr: "12:15", asr: "15:49", magrib: "18:59", isha: "20:39" },
    "02.05": { fajr: "03:11", sunrise: "04:44", zuhr: "12:15", asr: "15:49", magrib: "19:00", isha: "20:40" },
    "03.05": { fajr: "03:10", sunrise: "04:42", zuhr: "12:15", asr: "15:50", magrib: "19:02", isha: "20:42" },
    "04.05": { fajr: "03:08", sunrise: "04:41", zuhr: "12:15", asr: "15:50", magrib: "19:03", isha: "20:43" },
    "05.05": { fajr: "03:06", sunrise: "04:40", zuhr: "12:15", asr: "15:50", magrib: "19:04", isha: "20:44" },
    "06.05": { fajr: "03:05", sunrise: "04:38", zuhr: "12:15", asr: "15:51", magrib: "19:05", isha: "20:45" },
    "07.05": { fajr: "03:05", sunrise: "04:37", zuhr: "12:15", asr: "15:51", magrib: "19:06", isha: "20:46" },
    "08.05": { fajr: "03:05", sunrise: "04:36", zuhr: "12:15", asr: "15:52", magrib: "19:07", isha: "20:47" },
    "09.05": { fajr: "03:05", sunrise: "04:34", zuhr: "12:15", asr: "15:52", magrib: "19:08", isha: "20:48" },
    "10.05": { fajr: "03:03", sunrise: "04:33", zuhr: "12:15", asr: "15:52", magrib: "19:09", isha: "20:49" },
    "11.05": { fajr: "03:00", sunrise: "04:32", zuhr: "12:15", asr: "15:53", magrib: "19:11", isha: "20:51" },
    "12.05": { fajr: "02:58", sunrise: "04:31", zuhr: "12:15", asr: "15:53", magrib: "19:12", isha: "20:52" },
    "13.05": { fajr: "02:57", sunrise: "04:30", zuhr: "12:15", asr: "15:53", magrib: "19:13", isha: "20:53" },
    "14.05": { fajr: "02:56", sunrise: "04:29", zuhr: "12:15", asr: "15:54", magrib: "19:14", isha: "20:54" },
    "15.05": { fajr: "02:55", sunrise: "04:28", zuhr: "12:15", asr: "15:54", magrib: "19:15", isha: "20:55" },
    "16.05": { fajr: "02:54", sunrise: "04:27", zuhr: "12:15", asr: "15:54", magrib: "19:16", isha: "20:56" },
    "17.05": { fajr: "02:53", sunrise: "04:26", zuhr: "12:15", asr: "15:55", magrib: "19:17", isha: "20:57" },
    "18.05": { fajr: "02:53", sunrise: "04:25", zuhr: "12:15", asr: "15:55", magrib: "19:18", isha: "20:58" },
    "19.05": { fajr: "02:50", sunrise: "04:24", zuhr: "12:15", asr: "15:55", magrib: "19:19", isha: "20:59" },
    "20.05": { fajr: "02:50", sunrise: "04:23", zuhr: "12:15", asr: "15:56", magrib: "19:20", isha: "21:00" },
    "21.05": { fajr: "02:48", sunrise: "04:22", zuhr: "12:15", asr: "15:56", magrib: "19:21", isha: "21:01" },
    "22.05": { fajr: "02:48", sunrise: "04:21", zuhr: "12:15", asr: "15:56", magrib: "19:22", isha: "21:02" },
    "23.05": { fajr: "02:43", sunrise: "04:20", zuhr: "12:15", asr: "15:57", magrib: "19:23", isha: "21:03" },
    "24.05": { fajr: "02:40", sunrise: "04:19", zuhr: "12:15", asr: "15:57", magrib: "19:24", isha: "21:04" },
    "25.05": { fajr: "02:38", sunrise: "04:19", zuhr: "12:15", asr: "15:57", magrib: "19:25", isha: "21:05" },
    "26.05": { fajr: "02:38", sunrise: "04:18", zuhr: "12:15", asr: "15:58", magrib: "19:26", isha: "21:06" },
    "27.05": { fajr: "02:35", sunrise: "04:17", zuhr: "12:15", asr: "15:58", magrib: "19:27", isha: "21:07" },
    "28.05": { fajr: "02:35", sunrise: "04:16", zuhr: "12:15", asr: "15:58", magrib: "19:28", isha: "21:08" },
    "29.05": { fajr: "02:33", sunrise: "04:16", zuhr: "12:15", asr: "15:59", magrib: "19:29", isha: "21:09" },
    "30.05": { fajr: "02:30", sunrise: "04:15", zuhr: "12:15", asr: "15:59", magrib: "19:29", isha: "21:09" },
    "31.05": { fajr: "02:30", sunrise: "04:15", zuhr: "12:15", asr: "15:59", magrib: "19:29", isha: "21:09" },
    "01.06": { fajr: "02:28", sunrise: "04:14", zuhr: "12:15", asr: "16:00", magrib: "19:31", isha: "21:11" },
    "02.06": { fajr: "02:25", sunrise: "04:14", zuhr: "12:15", asr: "16:00", magrib: "19:32", isha: "21:12" },
    "03.06": { fajr: "02:25", sunrise: "04:13", zuhr: "12:15", asr: "16:00", magrib: "19:33", isha: "21:13" },
    "04.06": { fajr: "02:25", sunrise: "04:13", zuhr: "12:15", asr: "16:01", magrib: "19:33", isha: "21:13" },
    "05.06": { fajr: "02:25", sunrise: "04:12", zuhr: "12:15", asr: "16:01", magrib: "19:34", isha: "21:14" },
    "06.06": { fajr: "02:25", sunrise: "04:12", zuhr: "12:15", asr: "16:01", magrib: "19:35", isha: "21:15" },
    "07.06": { fajr: "02:20", sunrise: "04:12", zuhr: "12:15", asr: "16:02", magrib: "19:35", isha: "21:15" },
    "08.06": { fajr: "02:20", sunrise: "04:11", zuhr: "12:15", asr: "16:02", magrib: "19:36", isha: "21:16" },
    "09.06": { fajr: "02:20", sunrise: "04:11", zuhr: "12:15", asr: "16:02", magrib: "19:37", isha: "21:17" },
    "10.06": { fajr: "02:20", sunrise: "04:11", zuhr: "12:15", asr: "16:03", magrib: "19:37", isha: "21:17" },
    "11.06": { fajr: "02:20", sunrise: "04:11", zuhr: "12:15", asr: "16:03", magrib: "19:38", isha: "21:18" },
    "12.06": { fajr: "02:20", sunrise: "04:11", zuhr: "12:15", asr: "16:03", magrib: "19:38", isha: "21:18" },
    "13.06": { fajr: "02:20", sunrise: "04:11", zuhr: "12:15", asr: "16:03", magrib: "19:39", isha: "21:19" },
    "14.06": { fajr: "02:15", sunrise: "04:11", zuhr: "12:15", asr: "16:04", magrib: "19:39", isha: "21:19" },
    "15.06": { fajr: "02:15", sunrise: "04:11", zuhr: "12:15", asr: "16:04", magrib: "19:40", isha: "21:20" },
    "16.06": { fajr: "02:15", sunrise: "04:11", zuhr: "12:15", asr: "16:04", magrib: "19:40", isha: "21:20" },
    "17.06": { fajr: "02:15", sunrise: "04:11", zuhr: "12:15", asr: "16:05", magrib: "19:40", isha: "21:20" },
    "18.06": { fajr: "02:15", sunrise: "04:11", zuhr: "12:15", asr: "16:05", magrib: "19:41", isha: "21:21" },
    "19.06": { fajr: "02:15", sunrise: "04:11", zuhr: "12:15", asr: "16:05", magrib: "19:41", isha: "21:21" },
    "20.06": { fajr: "02:18", sunrise: "04:11", zuhr: "12:15", asr: "16:05", magrib: "19:41", isha: "21:21" },
    "21.06": { fajr: "02:18", sunrise: "04:11", zuhr: "12:15", asr: "16:05", magrib: "19:42", isha: "21:22" },
    "22.06": { fajr: "02:18", sunrise: "04:11", zuhr: "12:15", asr: "16:06", magrib: "19:42", isha: "21:22" },
    "23.06": { fajr: "02:20", sunrise: "04:12", zuhr: "12:15", asr: "16:06", magrib: "19:42", isha: "21:22" },
    "24.06": { fajr: "02:20", sunrise: "04:12", zuhr: "12:15", asr: "16:06", magrib: "19:42", isha: "21:22" },
    "25.06": { fajr: "02:20", sunrise: "04:12", zuhr: "12:15", asr: "16:06", magrib: "19:42", isha: "21:22" },
    "26.06": { fajr: "02:23", sunrise: "04:13", zuhr: "12:15", asr: "16:06", magrib: "19:42", isha: "21:22" },
    "27.06": { fajr: "02:23", sunrise: "04:13", zuhr: "12:15", asr: "16:07", magrib: "19:42", isha: "21:22" },
    "28.06": { fajr: "02:23", sunrise: "04:13", zuhr: "12:15", asr: "16:07", magrib: "19:42", isha: "21:22" },
    "29.06": { fajr: "02:23", sunrise: "04:14", zuhr: "12:15", asr: "16:07", magrib: "19:42", isha: "21:22" },
    "30.06": { fajr: "02:24", sunrise: "04:14", zuhr: "12:15", asr: "16:07", magrib: "19:42", isha: "21:22" },
    "01.07": { fajr: "02:25", sunrise: "04:15", zuhr: "12:15", asr: "16:07", magrib: "19:42", isha: "21:22" },
    "02.07": { fajr: "02:25", sunrise: "04:15", zuhr: "12:15", asr: "16:07", magrib: "19:42", isha: "21:22" },
    "03.07": { fajr: "02:25", sunrise: "04:16", zuhr: "12:15", asr: "16:07", magrib: "19:42", isha: "21:22" },
    "04.07": { fajr: "02:27", sunrise: "04:17", zuhr: "12:15", asr: "16:08", magrib: "19:41", isha: "21:21" },
    "05.07": { fajr: "02:28", sunrise: "04:17", zuhr: "12:15", asr: "16:08", magrib: "19:41", isha: "21:21" },
    "06.07": { fajr: "02:30", sunrise: "04:18", zuhr: "12:15", asr: "16:08", magrib: "19:41", isha: "21:21" },
    "07.07": { fajr: "02:30", sunrise: "04:18", zuhr: "12:15", asr: "16:08", magrib: "19:40", isha: "21:20" },
    "08.07": { fajr: "02:30", sunrise: "04:19", zuhr: "12:15", asr: "16:08", magrib: "19:40", isha: "21:20" },
    "09.07": { fajr: "02:34", sunrise: "04:20", zuhr: "12:15", asr: "16:08", magrib: "19:40", isha: "21:20" },
    "10.07": { fajr: "02:38", sunrise: "04:21", zuhr: "12:15", asr: "16:08", magrib: "19:39", isha: "21:19" },
    "11.07": { fajr: "02:40", sunrise: "04:21", zuhr: "12:15", asr: "16:08", magrib: "19:39", isha: "21:19" },
    "12.07": { fajr: "02:40", sunrise: "04:22", zuhr: "12:15", asr: "16:08", magrib: "19:38", isha: "21:18" },
    "13.07": { fajr: "02:41", sunrise: "04:23", zuhr: "12:15", asr: "16:08", magrib: "19:37", isha: "21:17" },
    "14.07": { fajr: "02:42", sunrise: "04:24", zuhr: "12:15", asr: "16:08", magrib: "19:37", isha: "21:17" },
    "15.07": { fajr: "02:43", sunrise: "04:25", zuhr: "12:15", asr: "16:07", magrib: "19:36", isha: "21:16" },
    "16.07": { fajr: "02:44", sunrise: "04:25", zuhr: "12:15", asr: "16:07", magrib: "19:35", isha: "21:15" },
    "17.07": { fajr: "02:46", sunrise: "04:26", zuhr: "12:15", asr: "16:07", magrib: "19:35", isha: "21:15" },
    "18.07": { fajr: "02:46", sunrise: "04:27", zuhr: "12:15", asr: "16:07", magrib: "19:34", isha: "21:14" },
    "19.07": { fajr: "02:48", sunrise: "04:28", zuhr: "12:15", asr: "16:07", magrib: "19:33", isha: "21:13" },
    "20.07": { fajr: "02:49", sunrise: "04:29", zuhr: "12:15", asr: "16:07", magrib: "19:32", isha: "21:12" },
    "21.07": { fajr: "02:50", sunrise: "04:30", zuhr: "12:15", asr: "16:07", magrib: "19:32", isha: "21:12" },
    "22.07": { fajr: "02:51", sunrise: "04:31", zuhr: "12:15", asr: "16:06", magrib: "19:31", isha: "21:11" },
    "23.07": { fajr: "02:55", sunrise: "04:32", zuhr: "12:15", asr: "16:06", magrib: "19:30", isha: "21:10" },
    "24.07": { fajr: "02:56", sunrise: "04:33", zuhr: "12:15", asr: "16:06", magrib: "19:29", isha: "21:09" },
    "25.07": { fajr: "02:58", sunrise: "04:34", zuhr: "12:15", asr: "16:06", magrib: "19:28", isha: "21:08" },
    "26.07": { fajr: "02:59", sunrise: "04:35", zuhr: "12:15", asr: "16:05", magrib: "19:27", isha: "21:07" },
    "27.07": { fajr: "03:00", sunrise: "04:36", zuhr: "12:15", asr: "16:05", magrib: "19:26", isha: "21:06" },
    "28.07": { fajr: "03:01", sunrise: "04:37", zuhr: "12:15", asr: "16:05", magrib: "19:25", isha: "21:05" },
    "29.07": { fajr: "03:01", sunrise: "04:38", zuhr: "12:15", asr: "16:04", magrib: "19:24", isha: "21:04" },
    "30.07": { fajr: "03:01", sunrise: "04:39", zuhr: "12:15", asr: "16:04", magrib: "19:23", isha: "21:03" },
    "31.07": { fajr: "03:01", sunrise: "04:40", zuhr: "12:15", asr: "16:04", magrib: "19:21", isha: "21:01" },
    "01.08": { fajr: "03:01", sunrise: "04:41", zuhr: "12:15", asr: "16:03", magrib: "19:20", isha: "21:00" },
    "02.08": { fajr: "03:02", sunrise: "04:42", zuhr: "12:15", asr: "16:03", magrib: "19:19", isha: "20:59" },
    "03.08": { fajr: "03:03", sunrise: "04:43", zuhr: "12:15", asr: "16:02", magrib: "19:18", isha: "20:58" },
    "04.08": { fajr: "03:05", sunrise: "04:44", zuhr: "12:15", asr: "16:02", magrib: "19:17", isha: "20:57" },
    "05.08": { fajr: "03:05", sunrise: "04:45", zuhr: "12:15", asr: "16:01", magrib: "19:15", isha: "20:55" },
    "06.08": { fajr: "03:05", sunrise: "04:46", zuhr: "12:15", asr: "16:01", magrib: "19:14", isha: "20:54" },
    "07.08": { fajr: "03:06", sunrise: "04:47", zuhr: "12:15", asr: "16:00", magrib: "19:13", isha: "20:53" },
    "08.08": { fajr: "03:06", sunrise: "04:49", zuhr: "12:15", asr: "16:00", magrib: "19:11", isha: "20:51" },
    "09.08": { fajr: "03:08", sunrise: "04:50", zuhr: "12:15", asr: "15:59", magrib: "19:10", isha: "20:50" },
    "10.08": { fajr: "03:09", sunrise: "04:51", zuhr: "12:15", asr: "15:58", magrib: "19:09", isha: "20:49" },
    "11.08": { fajr: "03:12", sunrise: "04:52", zuhr: "12:15", asr: "15:58", magrib: "19:07", isha: "20:47" },
    "12.08": { fajr: "03:15", sunrise: "04:53", zuhr: "12:15", asr: "15:57", magrib: "19:06", isha: "20:46" },
    "13.08": { fajr: "03:15", sunrise: "04:54", zuhr: "12:15", asr: "15:57", magrib: "19:04", isha: "20:44" },
    "14.08": { fajr: "03:15", sunrise: "04:55", zuhr: "12:15", asr: "15:56", magrib: "19:03", isha: "20:43" },
    "15.08": { fajr: "03:15", sunrise: "04:56", zuhr: "12:15", asr: "15:55", magrib: "19:01", isha: "20:41" },
    "16.08": { fajr: "03:15", sunrise: "04:57", zuhr: "12:15", asr: "15:54", magrib: "19:00", isha: "20:40" },
    "17.08": { fajr: "03:20", sunrise: "04:58", zuhr: "12:15", asr: "15:54", magrib: "18:58", isha: "20:38" },
    "18.08": { fajr: "03:24", sunrise: "04:59", zuhr: "12:15", asr: "15:53", magrib: "18:57", isha: "20:37" },
    "19.08": { fajr: "03:25", sunrise: "05:01", zuhr: "12:15", asr: "15:52", magrib: "18:55", isha: "20:35" },
    "20.08": { fajr: "03:28", sunrise: "05:02", zuhr: "12:15", asr: "15:51", magrib: "18:54", isha: "20:34" },
    "21.08": { fajr: "03:30", sunrise: "05:03", zuhr: "12:15", asr: "15:51", magrib: "18:52", isha: "20:32" },
    "22.08": { fajr: "03:30", sunrise: "05:04", zuhr: "12:15", asr: "15:50", magrib: "18:51", isha: "20:31" },
    "23.08": { fajr: "03:35", sunrise: "05:05", zuhr: "12:15", asr: "15:49", magrib: "18:49", isha: "20:29" },
    "24.08": { fajr: "03:35", sunrise: "05:06", zuhr: "12:15", asr: "15:48", magrib: "18:47", isha: "20:27" },
    "25.08": { fajr: "03:38", sunrise: "05:07", zuhr: "12:15", asr: "15:47", magrib: "18:46", isha: "20:26" },
    "26.08": { fajr: "03:40", sunrise: "05:08", zuhr: "12:15", asr: "15:46", magrib: "18:44", isha: "20:24" },
    "27.08": { fajr: "03:40", sunrise: "05:09", zuhr: "12:15", asr: "15:45", magrib: "18:42", isha: "20:22" },
    "28.08": { fajr: "03:45", sunrise: "05:11", zuhr: "12:15", asr: "15:44", magrib: "18:41", isha: "20:21" },
    "29.08": { fajr: "03:45", sunrise: "05:12", zuhr: "12:15", asr: "15:43", magrib: "18:39", isha: "20:19" },
    "30.08": { fajr: "03:45", sunrise: "05:13", zuhr: "12:15", asr: "15:42", magrib: "18:37", isha: "20:17" },
    "31.08": { fajr: "03:45", sunrise: "05:14", zuhr: "12:15", asr: "15:41", magrib: "18:35", isha: "20:15" },
    "01.09": { fajr: "03:45", sunrise: "05:15", zuhr: "12:15", asr: "15:40", magrib: "18:34", isha: "20:12" },
    "02.09": { fajr: "03:45", sunrise: "05:16", zuhr: "12:15", asr: "15:39", magrib: "18:32", isha: "20:10" },
    "03.09": { fajr: "03:45", sunrise: "05:17", zuhr: "12:15", asr: "15:38", magrib: "18:30", isha: "20:07" },
    "04.09": { fajr: "03:46", sunrise: "05:18", zuhr: "12:15", asr: "15:37", magrib: "18:29", isha: "20:04" },
    "05.09": { fajr: "03:46", sunrise: "05:19", zuhr: "12:15", asr: "15:36", magrib: "18:27", isha: "20:01" },
    "06.09": { fajr: "03:47", sunrise: "05:20", zuhr: "12:15", asr: "15:35", magrib: "18:25", isha: "19:58" },
    "07.09": { fajr: "03:48", sunrise: "05:21", zuhr: "12:15", asr: "15:34", magrib: "18:23", isha: "19:55" },
    "08.09": { fajr: "03:48", sunrise: "05:23", zuhr: "12:15", asr: "15:33", magrib: "18:21", isha: "19:52" },
    "09.09": { fajr: "03:49", sunrise: "05:24", zuhr: "12:15", asr: "15:32", magrib: "18:20", isha: "19:49" },
    "10.09": { fajr: "03:49", sunrise: "05:25", zuhr: "12:15", asr: "15:31", magrib: "18:18", isha: "19:47" },
    "11.09": { fajr: "03:50", sunrise: "05:26", zuhr: "12:15", asr: "15:30", magrib: "18:16", isha: "19:46" },
    "12.09": { fajr: "03:50", sunrise: "05:27", zuhr: "12:15", asr: "15:28", magrib: "18:14", isha: "19:44" },
    "13.09": { fajr: "03:51", sunrise: "05:28", zuhr: "12:15", asr: "15:27", magrib: "18:12", isha: "19:42" },
    "14.09": { fajr: "03:55", sunrise: "05:29", zuhr: "12:15", asr: "15:26", magrib: "18:11", isha: "19:41" },
    "15.09": { fajr: "03:56", sunrise: "05:30", zuhr: "12:15", asr: "15:25", magrib: "18:09", isha: "19:39" },
    "16.09": { fajr: "03:57", sunrise: "05:31", zuhr: "12:15", asr: "15:24", magrib: "18:07", isha: "19:37" },
    "17.09": { fajr: "04:00", sunrise: "05:32", zuhr: "12:15", asr: "15:22", magrib: "18:05", isha: "19:35" },
    "18.09": { fajr: "04:01", sunrise: "05:34", zuhr: "12:15", asr: "15:21", magrib: "18:03", isha: "19:33" },
    "19.09": { fajr: "04:02", sunrise: "05:35", zuhr: "12:15", asr: "15:20", magrib: "18:02", isha: "19:32" },
    "20.09": { fajr: "04:03", sunrise: "05:36", zuhr: "12:15", asr: "15:19", magrib: "18:00", isha: "19:30" },
    "21.09": { fajr: "04:04", sunrise: "05:37", zuhr: "12:15", asr: "15:17", magrib: "17:58", isha: "19:28" },
    "22.09": { fajr: "04:08", sunrise: "05:38", zuhr: "12:15", asr: "15:16", magrib: "17:56", isha: "19:26" },
    "23.09": { fajr: "04:10", sunrise: "05:39", zuhr: "12:15", asr: "15:15", magrib: "17:54", isha: "19:24" },
    "24.09": { fajr: "04:11", sunrise: "05:40", zuhr: "12:15", asr: "15:14", magrib: "17:53", isha: "19:23" },
    "25.09": { fajr: "04:15", sunrise: "05:41", zuhr: "12:15", asr: "15:12", magrib: "17:51", isha: "19:21" },
    "26.09": { fajr: "04:17", sunrise: "05:42", zuhr: "12:15", asr: "15:11", magrib: "17:49", isha: "19:19" },
    "27.09": { fajr: "04:18", sunrise: "05:44", zuhr: "12:15", asr: "15:10", magrib: "17:47", isha: "19:17" },
    "28.09": { fajr: "04:20", sunrise: "05:45", zuhr: "12:15", asr: "15:09", magrib: "17:45", isha: "19:15" },
    "29.09": { fajr: "04:21", sunrise: "05:46", zuhr: "12:15", asr: "15:07", magrib: "17:44", isha: "19:14" },
    "30.09": { fajr: "04:22", sunrise: "05:47", zuhr: "12:15", asr: "15:06", magrib: "17:42", isha: "19:12" },
    "01.10": { fajr: "04:22", sunrise: "05:48", zuhr: "12:15", asr: "15:05", magrib: "17:40", isha: "19:10" },
    "02.10": { fajr: "04:24", sunrise: "05:49", zuhr: "12:15", asr: "15:03", magrib: "17:38", isha: "19:08" },
    "03.10": { fajr: "04:25", sunrise: "05:50", zuhr: "12:15", asr: "15:02", magrib: "17:36", isha: "19:06" },
    "04.10": { fajr: "04:25", sunrise: "05:52", zuhr: "12:15", asr: "15:01", magrib: "17:35", isha: "19:05" },
    "05.10": { fajr: "04:25", sunrise: "05:53", zuhr: "12:15", asr: "14:59", magrib: "17:33", isha: "19:03" },
    "06.10": { fajr: "04:27", sunrise: "05:54", zuhr: "12:15", asr: "14:58", magrib: "17:31", isha: "19:01" },
    "07.10": { fajr: "04:28", sunrise: "05:55", zuhr: "12:15", asr: "14:57", magrib: "17:29", isha: "18:59" },
    "08.10": { fajr: "04:30", sunrise: "05:56", zuhr: "12:15", asr: "14:56", magrib: "17:28", isha: "18:58" },
    "09.10": { fajr: "04:32", sunrise: "05:57", zuhr: "12:15", asr: "14:54", magrib: "17:26", isha: "18:56" },
    "10.10": { fajr: "04:35", sunrise: "05:58", zuhr: "12:15", asr: "14:53", magrib: "17:24", isha: "18:54" },
    "11.10": { fajr: "04:38", sunrise: "06:00", zuhr: "12:15", asr: "14:52", magrib: "17:23", isha: "18:53" },
    "12.10": { fajr: "04:40", sunrise: "06:01", zuhr: "12:15", asr: "14:50", magrib: "17:21", isha: "18:51" },
    "13.10": { fajr: "04:41", sunrise: "06:02", zuhr: "12:15", asr: "14:49", magrib: "17:19", isha: "18:49" },
    "14.10": { fajr: "04:42", sunrise: "06:03", zuhr: "12:15", asr: "14:48", magrib: "17:17", isha: "18:47" },
    "15.10": { fajr: "04:43", sunrise: "06:04", zuhr: "12:15", asr: "14:47", magrib: "17:16", isha: "18:46" },
    "16.10": { fajr: "04:45", sunrise: "06:06", zuhr: "12:15", asr: "14:45", magrib: "17:14", isha: "18:44" },
    "17.10": { fajr: "04:47", sunrise: "06:07", zuhr: "12:15", asr: "14:44", magrib: "17:13", isha: "18:43" },
    "18.10": { fajr: "04:48", sunrise: "06:08", zuhr: "12:15", asr: "14:43", magrib: "17:11", isha: "18:41" },
    "19.10": { fajr: "04:49", sunrise: "06:09", zuhr: "12:15", asr: "14:41", magrib: "17:09", isha: "18:39" },
    "20.10": { fajr: "04:49", sunrise: "06:11", zuhr: "12:15", asr: "14:40", magrib: "17:08", isha: "18:38" },
    "21.10": { fajr: "04:49", sunrise: "06:12", zuhr: "12:15", asr: "14:39", magrib: "17:06", isha: "18:36" },
    "22.10": { fajr: "04:49", sunrise: "06:13", zuhr: "12:15", asr: "14:38", magrib: "17:05", isha: "18:35" },
    "23.10": { fajr: "04:50", sunrise: "06:14", zuhr: "12:15", asr: "14:37", magrib: "17:03", isha: "18:33" },
    "24.10": { fajr: "04:50", sunrise: "06:15", zuhr: "12:15", asr: "14:35", magrib: "17:02", isha: "18:32" },
    "25.10": { fajr: "04:50", sunrise: "06:17", zuhr: "12:15", asr: "14:34", magrib: "17:00", isha: "18:30" },
    "26.10": { fajr: "04:50", sunrise: "06:18", zuhr: "12:15", asr: "14:33", magrib: "16:59", isha: "18:29" },
    "27.10": { fajr: "04:50", sunrise: "06:19", zuhr: "12:15", asr: "14:32", magrib: "16:57", isha: "18:27" },
    "28.10": { fajr: "04:50", sunrise: "06:21", zuhr: "12:15", asr: "14:31", magrib: "16:56", isha: "18:26" },
    "29.10": { fajr: "04:50", sunrise: "06:22", zuhr: "12:15", asr: "14:30", magrib: "16:54", isha: "18:24" },
    "30.10": { fajr: "04:50", sunrise: "06:23", zuhr: "12:15", asr: "14:29", magrib: "16:53", isha: "18:23" },
    "31.10": { fajr: "04:50", sunrise: "06:24", zuhr: "12:15", asr: "14:27", magrib: "16:52", isha: "18:22" },
    "01.11": { fajr: "04:52", sunrise: "06:26", zuhr: "12:15", asr: "14:26", magrib: "16:50", isha: "18:20" },
    "02.11": { fajr: "04:52", sunrise: "06:27", zuhr: "12:15", asr: "14:25", magrib: "16:49", isha: "18:19" },
    "03.11": { fajr: "04:54", sunrise: "06:28", zuhr: "12:15", asr: "14:24", magrib: "16:48", isha: "18:18" },
    "04.11": { fajr: "04:55", sunrise: "06:29", zuhr: "12:15", asr: "14:23", magrib: "16:46", isha: "18:16" },
    "05.11": { fajr: "04:55", sunrise: "06:31", zuhr: "12:15", asr: "14:22", magrib: "16:45", isha: "18:15" },
    "06.11": { fajr: "04:58", sunrise: "06:32", zuhr: "12:15", asr: "14:21", magrib: "16:44", isha: "18:14" },
    "07.11": { fajr: "04:59", sunrise: "06:33", zuhr: "12:15", asr: "14:20", magrib: "16:43", isha: "18:13" },
    "08.11": { fajr: "05:00", sunrise: "06:35", zuhr: "12:15", asr: "14:19", magrib: "16:42", isha: "18:12" },
    "09.11": { fajr: "05:02", sunrise: "06:36", zuhr: "12:15", asr: "14:18", magrib: "16:40", isha: "18:10" },
    "10.11": { fajr: "05:02", sunrise: "06:37", zuhr: "12:15", asr: "14:18", magrib: "16:39", isha: "18:09" },
    "11.11": { fajr: "05:07", sunrise: "06:38", zuhr: "12:15", asr: "14:17", magrib: "16:38", isha: "18:08" },
    "12.11": { fajr: "05:10", sunrise: "06:40", zuhr: "12:15", asr: "14:16", magrib: "16:37", isha: "18:07" },
    "13.11": { fajr: "05:12", sunrise: "06:41", zuhr: "12:15", asr: "14:15", magrib: "16:36", isha: "18:06" },
    "14.11": { fajr: "05:12", sunrise: "06:42", zuhr: "12:15", asr: "14:14", magrib: "16:35", isha: "18:05" },
    "15.11": { fajr: "05:12", sunrise: "06:44", zuhr: "12:15", asr: "14:14", magrib: "16:34", isha: "18:04" },
    "16.11": { fajr: "05:15", sunrise: "06:45", zuhr: "12:15", asr: "14:13", magrib: "16:33", isha: "18:03" },
    "17.11": { fajr: "05:15", sunrise: "06:46", zuhr: "12:15", asr: "14:12", magrib: "16:33", isha: "18:03" },
    "18.11": { fajr: "05:18", sunrise: "06:47", zuhr: "12:15", asr: "14:11", magrib: "16:32", isha: "18:02" },
    "19.11": { fajr: "05:18", sunrise: "06:49", zuhr: "12:15", asr: "14:11", magrib: "16:31", isha: "18:01" },
    "20.11": { fajr: "05:20", sunrise: "06:50", zuhr: "12:15", asr: "14:10", magrib: "16:30", isha: "18:00" },
    "21.11": { fajr: "05:20", sunrise: "06:51", zuhr: "12:15", asr: "14:10", magrib: "16:29", isha: "17:59" },
    "22.11": { fajr: "05:20", sunrise: "06:52", zuhr: "12:15", asr: "14:09", magrib: "16:29", isha: "17:59" },
    "23.11": { fajr: "05:23", sunrise: "06:54", zuhr: "12:15", asr: "14:09", magrib: "16:28", isha: "17:58" },
    "24.11": { fajr: "05:23", sunrise: "06:55", zuhr: "12:15", asr: "14:08", magrib: "16:27", isha: "17:57" },
    "25.11": { fajr: "05:23", sunrise: "06:56", zuhr: "12:15", asr: "14:08", magrib: "16:27", isha: "17:57" },
    "26.11": { fajr: "05:25", sunrise: "06:57", zuhr: "12:15", asr: "14:07", magrib: "16:26", isha: "17:56" },
    "27.11": { fajr: "05:25", sunrise: "06:58", zuhr: "12:15", asr: "14:07", magrib: "16:26", isha: "17:56" },
    "28.11": { fajr: "05:25", sunrise: "07:00", zuhr: "12:15", asr: "14:06", magrib: "16:25", isha: "17:55" },
    "29.11": { fajr: "05:28", sunrise: "07:01", zuhr: "12:15", asr: "14:06", magrib: "16:25", isha: "17:55" },
    "30.11": { fajr: "05:28", sunrise: "07:02", zuhr: "12:15", asr: "14:06", magrib: "16:24", isha: "17:54" },
    "01.12": { fajr: "05:30", sunrise: "07:03", zuhr: "12:15", asr: "14:06", magrib: "16:24", isha: "17:54" },
    "02.12": { fajr: "05:33", sunrise: "07:04", zuhr: "12:15", asr: "14:05", magrib: "16:24", isha: "17:54" },
    "03.12": { fajr: "05:35", sunrise: "07:05", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "04.12": { fajr: "05:36", sunrise: "07:06", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "05.12": { fajr: "05:36", sunrise: "07:07", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "06.12": { fajr: "05:37", sunrise: "07:08", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "07.12": { fajr: "05:38", sunrise: "07:09", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "08.12": { fajr: "05:38", sunrise: "07:10", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "09.12": { fajr: "05:39", sunrise: "07:11", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "10.12": { fajr: "05:39", sunrise: "07:12", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "11.12": { fajr: "05:40", sunrise: "07:13", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "12.12": { fajr: "05:40", sunrise: "07:14", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "13.12": { fajr: "05:40", sunrise: "07:14", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "14.12": { fajr: "05:43", sunrise: "07:15", zuhr: "12:15", asr: "14:05", magrib: "16:23", isha: "17:53" },
    "15.12": { fajr: "05:43", sunrise: "07:16", zuhr: "12:15", asr: "14:06", magrib: "16:23", isha: "17:53" },
    "16.12": { fajr: "05:43", sunrise: "07:17", zuhr: "12:15", asr: "14:06", magrib: "16:24", isha: "17:54" },
    "17.12": { fajr: "05:43", sunrise: "07:17", zuhr: "12:15", asr: "14:06", magrib: "16:24", isha: "17:54" },
    "18.12": { fajr: "05:43", sunrise: "07:18", zuhr: "12:15", asr: "14:07", magrib: "16:24", isha: "17:54" },
    "19.12": { fajr: "05:44", sunrise: "07:19", zuhr: "12:15", asr: "14:07", magrib: "16:25", isha: "17:55" },
    "20.12": { fajr: "05:50", sunrise: "07:19", zuhr: "12:15", asr: "14:07", magrib: "16:25", isha: "17:55" },
    "21.12": { fajr: "05:50", sunrise: "07:20", zuhr: "12:15", asr: "14:08", magrib: "16:26", isha: "17:56" },
    "22.12": { fajr: "05:50", sunrise: "07:20", zuhr: "12:15", asr: "14:08", magrib: "16:26", isha: "17:56" },
    "23.12": { fajr: "05:50", sunrise: "07:21", zuhr: "12:15", asr: "14:09", magrib: "16:27", isha: "17:57" },
    "24.12": { fajr: "05:50", sunrise: "07:21", zuhr: "12:15", asr: "14:09", magrib: "16:27", isha: "17:57" },
    "25.12": { fajr: "05:50", sunrise: "07:21", zuhr: "12:15", asr: "14:10", magrib: "16:28", isha: "17:58" },
    "26.12": { fajr: "05:50", sunrise: "07:22", zuhr: "12:15", asr: "14:11", magrib: "16:28", isha: "17:58" },
    "27.12": { fajr: "05:52", sunrise: "07:22", zuhr: "12:15", asr: "14:11", magrib: "16:29", isha: "17:59" },
    "28.12": { fajr: "05:52", sunrise: "07:22", zuhr: "12:15", asr: "14:12", magrib: "16:30", isha: "18:00" },
    "29.12": { fajr: "05:52", sunrise: "07:23", zuhr: "12:15", asr: "14:13", magrib: "16:31", isha: "18:01" },
    "30.12": { fajr: "05:52", sunrise: "07:23", zuhr: "12:15", asr: "14:13", magrib: "16:31", isha: "18:01" },
    "31.12": { fajr: "05:52", sunrise: "07:23", zuhr: "12:15", asr: "14:14", magrib: "16:32", isha: "18:02" }

}
const now = new Date();

// const tabRasp = document.querySelector("div");
const dataWiwod = document.querySelector("h3");
const tabRasp = document.querySelector("dl");



const day = String(now.getDate()).padStart(2, "0");
const year = String(now.getFullYear());
const month = String(now.getMonth() + 1).padStart(2, "0");


const today = `${day}.${month}`;

// console.log(today)


const times = prayerTime[today];

// console.log(times)

dataWiwod.innerText += ` ${today}.${year}`

// tabRasp.innerHTML = `
// <tr>
//     <td>${times.fajr}</td>
//     <td>${times.sunrise}</td>
//     <td>${times.zuhr}</td>
//     <td>${times.asr}</td>
//     <td>${times.magrib}</td>
//     <td>${times.isha}</td>
// </tr>
// `

tabRasp.innerHTML = `
<div class="item">
<dt>Фаджр</dt>
<dd>${times.fajr}</dd>
</div>
<div class="item">
<dt>Восход</dt>
<dd>${times.sunrise}</dd>
</div>
<div class="item">
<dt>Зухр</dt>
<dd>${times.zuhr}</dd>
</div>
<div class="item">
<dt>Аср</dt>
<dd>${times.asr}</dd>
</div>
<div class="item">
<dt>Магриб</dt>
<dd>${times.magrib}</dd>
</div>
<div class="item">
<dt>Иша</dt>
<dd>${times.isha}</dd>
</div>
`

// === Расписание намазов ===


// === Основная функция: показывает, сколько осталось до следующего намаза ===
function getNextPrayerReport() {
    const now = new Date(); // текущее время

    const countdown = document.querySelector(".countdown");

    // Формируем ключ даты в виде "ДД.ММ"
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const key = `${day}.${month}`;

    // Берём расписание для текущего дня
    const today = prayerTime[key];

    if (!today) {
        console.log("❌ Нет данных на сегодня");
        return;
    }

    // Функция для перевода "HH:MM" → минут с начала дня
    const toMinutes = (t) => {
        const [h, m] = t.split(":").map(Number);
        return h * 60 + m;
    };

    // Массив намазов по порядку
    const prayers = [
        { name: "Фаджра", time: today.fajr },
        { name: "Восхода", time: today.sunrise },
        { name: "Зухра", time: today.zuhr },
        { name: "Асра", time: today.asr },
        { name: "Магриба", time: today.magrib },
        { name: "Иша", time: today.isha }
    ];

    // Сколько сейчас минут с начала дня
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    // Ищем ближайший намаз, который ещё не наступил
    let next = prayers.find(p => toMinutes(p.time) > nowMinutes);

    // --- Если все намазы прошли ---
    if (!next) {
        // Определяем дату следующего дня
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const nextKey = String(tomorrow.getDate()).padStart(2, "0") + "." + String(tomorrow.getMonth() + 1).padStart(2, "0");

        // Берём расписание следующего дня
        const tomorrowSchedule = prayerTime[nextKey];

        if (tomorrowSchedule && tomorrowSchedule.fajr) {
            // Создаём объект для следующего фаджра
            next = {
                name: "Фаджра",
                time: tomorrowSchedule.fajr,
                nextDay: true,
                date: tomorrow
            };
        } else {
            console.log("❌ Нет данных на завтра");
            return;
        }
    }

    // --- Считаем, сколько осталось ---
    let nextPrayerDate;

    if (next.nextDay) {
        // Если это фаджр следующего дня
        const [h, m] = next.time.split(":").map(Number);
        nextPrayerDate = new Date(next.date.getFullYear(), next.date.getMonth(), next.date.getDate(), h, m);
    } else {
        // Если намаз сегодня
        const [h, m] = next.time.split(":").map(Number);
        nextPrayerDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
    }

    // Разница во времени (в миллисекундах)
    const diffMs = nextPrayerDate - now;

    // Переводим в часы и минуты
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    // Выводим сообщение
    const msg = `До ${next.name}: ${hours ? hours + " ч " : ""}${minutes} мин.`;
    // console.log(msg);
    countdown.textContent = msg;
}

// === Запускаем функцию ===
document.addEventListener("DOMContentLoaded", () => {
    getNextPrayerReport();
    setInterval(getNextPrayerReport, 60 * 1000);
});

  // (опционально) можно обновлять каждые 60 секунд:
  // setInterval(getNextPrayerReport, 60 * 1000);
