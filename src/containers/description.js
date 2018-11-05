import React, { Component } from 'react';

class Description extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="pageContent">
                <h2>Как пользоваться калькулятором</h2>
                <ol>
                    <li>Выберите какой толщины у Вас будут стены</li>
                    <li>Для каждой толщины, заполните размеры стен и проемов</li>
                    <li>В меню слева можно переключать виды стен, и перейти на вкладку "Объем итого" - результаты расчета</li>
                    <li>На вкладке "Объем итого" нужно ввести цену одного кирпича, чтобы получить общую цену всех кирпичей</li>
                </ol>
            </div>
        )
    }

}

export default Description;