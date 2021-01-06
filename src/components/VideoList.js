import VideoItem from './VideoItem';

function VideoList (props) {
    console.log(props.videoResults);
    const ItemList = () => {
        let arrItems=[]
        for (let x=0; x<props.videoResults.length; x++){
            arrItems.push(<VideoItem key={x} id={x} videoResults={props.videoResults} />)
        }
        return [arrItems];
    }
    return (
        <div>
            <p>Results</p>
            <ItemList />
        </div>
    );
}

export default VideoList;