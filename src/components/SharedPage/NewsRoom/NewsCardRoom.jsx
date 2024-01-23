

const NewsCardRoom = ({item}) => {
    const {image,title,details} = item;
    return (
        <div>
            
<a href="#" className="flex flex-col items-center   md:flex-row md:max-w-xl hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg  h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
        <hr />
    </div>
</a>

        </div>
    );
};

export default NewsCardRoom;