
import PropTypes from 'prop-types'
const Category = ({job}) => {
    const {category_name,availability} = job;
    console.log(job);
    return (
        <div>
            <div className='bg-gray-100 rounded-lg p-6 '>
                <div className=''>
                <img className='bg-gray-300 rounded-xl p-4' src="/public/accounts.png" alt="" />
                </div>
                <h1 className='text-2xl font-bold py-2'>{category_name}</h1>
                <p className='text-xl'>{availability}</p>
            </div>
        </div>
    );
};
Category.propTypes = {
    job:PropTypes.object
}
export default Category;