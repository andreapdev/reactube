import VideoItem from './VideoItem';

function VideoList (props) {
    const displayResults = () => {
        console.log(props.videoResults);
        let arrVideos = [];
        for (let x=0; x<5; x++) {
            if(props.videoResults[x]){
                arrVideos.push(props.videoResults[x].etag)
            } else { return null}
        }
        for (let x=0; x>arrVideos; x++) {

        }
    }
    const ItemList = () => {
        let arrItems=[]
        for (let x=0; x<props.videoResults.length; x++){
            arrItems.push(<VideoItem key={x} />)
        }
        return [arrItems];
    }
    return (
        <div>
            <p>Video List</p>
            <ItemList />
        </div>
    );
}

export default VideoList;