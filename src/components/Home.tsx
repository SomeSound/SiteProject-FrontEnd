import Container from './Container';

function Home() {
  return (
    <div className="bg-gray-900 m-2 h-full rounded">
      <div className="flex">
        <div className="w-full">
          <Container />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <Container />
        </div>
        <div className="w-1/2">
          <Container />
        </div>
      </div>

      <div className="flex">
        <div className="w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default Home;
