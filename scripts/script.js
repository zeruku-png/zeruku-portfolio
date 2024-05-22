(function() {
	'use strict';

	var
	// 入力受付時間（1.5秒）
		wait = 1500,

		// standby = false の時は入力を受け付けない
		standby = true,

		// コマンドのキーコード
		command = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],

		length = command.length,
		index = 0,
		timer = null;

	document.addEventListener('keydown', function(ev) {
		// タイマーのリセット
		clearTimeout(timer);

		// コマンドの確認
		if (standby && ev.keyCode === command[index]) {

			index++;

			if (index >= length) {
				// すべてのコマンドを入力した！

				standby = false; // 処理中にコマンドを受け付けないようにする
				index = 0; // コマンドリセット

                document.getElementsByClassName("status-icon")[0].style.backgroundColor = "#CC0000"
                document.getElementsByClassName("status-message")[0].innerText = "まぁまぁ元気"

			} else {
				// 一定時間入力がなかったらリセット
				timer = setTimeout(function() {
					index = 0;
				}, wait);
			}

		} else {
			// コマンドが間違っていたらリセット
			index = 0;
		}
	});
})();
