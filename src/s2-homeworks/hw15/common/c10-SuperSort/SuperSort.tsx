import React from 'react'
import s from '../../HW15.module.css'

// добавить в проект иконки и импортировать
/*const downIcon = 'https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/arrow-down-51.png'
const upIcon = 'https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/arrow-up-50.png'
const noneIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Icon_None.svg/768px-Icon_None.svg.png'*/

const downIcon = '▼'
const upIcon = '▲'
const noneIcon = '∅'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    /* if (sort === ''){
        sort = down
    } else if (sort === down) {
        sort = up
    } else if (sort === up) {
        sort = ''
    } else sort = down
    return sort*/
    return sort === down
        ? up
        : sort === up
            ? ''
            : down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img className={s.sortIcon}
                 id={id + '-icon-' + sort}
                 src={icon}
            />
            {icon}
            {/*  а это убрать*/}
        </span>
    )
}

export default SuperSort
