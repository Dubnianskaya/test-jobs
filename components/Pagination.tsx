import Pagination from '@etchteam/next-pagination'
import styles from '../styles/theme.module.scss'

export const PaginationComponent = () => {
    return (
        <div className='mb-16'>
          <Pagination total={360} theme={styles}/>
        </div>
    )
}