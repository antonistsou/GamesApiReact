const findById = <T extends { id: number }>
    (targetId: T[], id?: number) => {
    if (typeof (targetId) === 'undefined') return;
    return targetId.find(item => item.id === id);
}

export default findById;