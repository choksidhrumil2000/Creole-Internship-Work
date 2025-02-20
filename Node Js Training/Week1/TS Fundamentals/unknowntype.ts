//=============================================Unknown type=======================================

let result2: unknown;

result2 = 1;
result2 = 'hello';
result2 = false;
result2 = Symbol();
result2 = { name: 'John' };
result2 = [1, 2, 3];

let result3: unknown;
result3 = [1,2,3];

const total = (result3 as number[]).reduce((a: number, b:number ) => a + b, 0);
console.log(total);

const fetchData = async (url: string): Promise<unknown> => {
    const response = await fetch(url);
    return await response.json();
};

const showPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const posts = await fetchData(url); // unknown type
        (
            posts as { userId: number; id: number; title: string; body: string }[]
        ).map((post) => console.log(post.title));
    } catch (err) {
        console.log(err);
    }
};
