export default function({ closeHandler, visible }) {
	return (
		<>
		{
			visible &&
			<div className="relative">
				<div className="absolute w-screen h-screen bg-black opacity-70" onClick={closeHandler}>
				</div>
				<div className="absolute left-0 right-0 top-12 w-4/5 mx-auto bg-white p-4 rounded" onClick={closeHandler}>
					<div className="flex flex-row w-full justify-between">
						<h1 className="text-xl font-bold">Навигатор Фрилансера</h1>
						<button onClick={closeHandler}><span className="font-bold text-xl text-gray-400">X</span></button>
					</div>
					<div className="mt-2 leading-5">
					<p className="mt-2">
						Это навигатор по карте звёздных систем игры Freelancer. Дело в том, что
						&laquo;родной&raquo; навигатор не строит маршруты через прыжковые дыры, 
						не оборудованные воротами.
					</p>
					<p className="mt-2">
						Приложение строит путь не глядя на состояние прыжковых дыр, чтобы можно было
						путешествовать кратчайшими путями из системы в систему.
					</p>
					<p className="mt-2">
						Попутно, это демо-проект для моего портфолио. Исходный код и документация 
						находятся в&nbsp;
						<a href="https://github.com/zvookiejoo/freelancer-nav" target={"_blank"} className="text-blue-700 underline">этом репозитории</a>.
					</p>
					<h2 className="font-bold mt-2">Как пользоваться</h2>
					<p className="mt-2">
						На схеме можно подсмотреть названия систем. Введите названия системы отправления
						и системы назначения в поля &laquo;Откуда&raquo; и &laquo;Куда&raquo; (работает 
						подсказка ввода &mdash; можно выбрать из списка). Обратите внимание, что поиск &mdash;&nbsp;
						<span className="font-semibold">регистрозависимый</span>, то есть названия надо вводить так,
						как они указаны на карте. После указания начального и конечного пунктов &mdash; нажмите зелёную 
						кнопку &laquo;Поиск&raquo;.
					</p>
					<p className="mt-2">
						Найденный маршрут выведется под кнопками &laquo;Сброс&raquo; и &laquo;Поиск&raquo;. Если
						появляется сообщение &laquo;Маршрут не найден&raquo;, значит &mdash; неверно указан начальный
						или конечный пункт маршрута.
					</p>
					</div>
				</div>
			</div>
		}
		</>
	)
}