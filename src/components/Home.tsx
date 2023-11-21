import TableList from './TableList';
import MusicList from '../assets/musicas.json';

function Home() {
  const head = ['Nome', 'Gênero', 'Duração'];

  return (
    <div className="bg-gray-900 m-2 h-full rounded">
      <div className="flex">
        <div className="w-full">
          <TableList headers={head} items={MusicList.musicDataList} />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <TableList headers={head} items={MusicList.musicDataList} />
        </div>
        <div className="w-1/2">
          <TableList headers={head} items={MusicList.musicDataList} />
        </div>
      </div>

      <div className="flex">
        <div className="w-full">
          <TableList headers={head} items={MusicList.musicDataList} />
        </div>
      </div>
    </div>
  );
}

export default Home;
