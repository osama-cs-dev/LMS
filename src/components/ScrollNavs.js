
import TopNavbar from './TopNavbar';
import SecondaryNav from './SecondaryNav';

const ScrollNavs = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 9999,
      }}
    >
      <TopNavbar />
      <SecondaryNav />
    </div>
  );
};

export default ScrollNavs;
