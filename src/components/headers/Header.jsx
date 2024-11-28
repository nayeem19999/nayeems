import img from '../../assets/images/1.png'
const Header = () => {
    return (
        <div className='flex justify-between max-w-5xl mx-auto border-b-2 py-5'>
            <h1 className="text-4xl font-bold">Logo</h1>
            <img height={'100px'} width={'50px'} src={img} alt="hi" />
        </div>
    );
};

export default Header;