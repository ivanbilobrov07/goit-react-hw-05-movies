import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Oval
        height={40}
        width={40}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
