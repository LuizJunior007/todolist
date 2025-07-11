export const dateFormat = (data: string) => {

    const date = new Date(data);

    return (date.getDate() + 1) + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

}