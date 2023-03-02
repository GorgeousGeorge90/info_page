
const dataCreater= films => {

        if (Array.isArray(films)) {
            const pivot = Math.round(films.length / 2)
            const data = films.filter(film => films.indexOf(film) < pivot)
            const data1 = films.filter(film => films.indexOf(film) > pivot & films.indexOf(film) <= films.length - 1)
            const data_column = [
                {id: '1', data: data},
                {id: '2', data: data1},
            ]

            return data_column
        } else {
            return null
        }
}

export default dataCreater

