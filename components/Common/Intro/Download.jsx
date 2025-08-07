const Download = ({ icon }) => {
  return (
    <>
      <a href='/Andy_Setiyawan_English_Cv_08_2025.pdf' target='_blank' rel='noopener noreferrer' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </a>
    </>
  );
};

export default Download;
