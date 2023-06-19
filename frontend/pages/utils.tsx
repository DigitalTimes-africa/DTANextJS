
const slugToTitle = (slugWord: string) => {
    const words = slugWord.split("-"); 
    const title = words.join(" ");
    return title;
};

export default slugToTitle;