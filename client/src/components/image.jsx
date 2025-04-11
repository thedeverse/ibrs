

export function Image({source, imageHeight, imageWidth, style}){
    
    
    
    
    const imageStyle={
        width: imageWidth==null? (imageHeight==null)?"100px":imageHeight:imageWidth,
        height: imageHeight==null? (imageWidth==null)?"100px":imageWidth:imageHeight,
        ...style,
    }


    return (
        <>
            <img src={source} style={imageStyle} alt=""/>
        </>
    );
}