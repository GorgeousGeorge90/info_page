import styles from './BaseTable.module.scss';
import {useTable} from "react-table/src";
import {useSelector} from "react-redux";
import {getNewFilms} from "../../selectors/searchSelectors";
import {useMemo} from "react";




const BaseTable = () => {

    const data = useSelector(state => getNewFilms(state))
    const columns = useMemo(()=> [
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'Vote average',
            accessor: 'vote_average'
        },
        {
            Header: 'Release date',
            accessor: 'release_date'
        },
    ])

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({ data, columns })



    return <div className={styles.container}>
        <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column=> (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map((row)=> {
                prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell=> (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))
                            }

                        </tr>
                    )
            })
            }
            </tbody>
        </table>
    </div>
}

export default BaseTable