export default (
    section,
    playerMove,
    isOccupied,
    onAddMove,
    onChangeTurn
) => {
    if (!isOccupied) {
        onAddMove({ id: section, player: playerMove });
        onChangeTurn();
    }
};