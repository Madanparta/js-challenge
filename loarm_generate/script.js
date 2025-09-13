const tagOptions = [
    "p", "h1", "h2",
    "h3", "h4", "h5",
    "h6", "span",
];


const lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ducimus cum unde aperiam, iusto reprehenderit aspernatur. Error, esse itaque. Similique itaque pariatur nihil ducimus nostrum vero perspiciatis voluptatem, possimus magnam?";

const paragraphs = document.getElementById('paragraphs');
const paragraphs_value = document.getElementById('paragraphs_value');

const words_of_paragraphs = document.getElementById('words_of_paragraphs');
const words_of_paragraphs_value = document.getElementById('words_of_paragraphs_value');

const Tags = document.getElementById('Tags');

const include_html = document.getElementById('include_html');
const generate_lorem_ipsum = document.getElementById('generate_lorem_ipsum');
const textarea_lorem_ipsum = document.getElementById('lorem_ipsum');

paragraphs.addEventListener('input',()=>{
    paragraphs_value.textContent = parseInt(paragraphs.value);
});

words_of_paragraphs.addEventListener('input',()=>{
    words_of_paragraphs_value.textContent = parseInt(words_of_paragraphs.value);
});

window.addEventListener('DOMContentLoaded', () => {
    tagOptions.forEach((tag, index) => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        if (index === 0) {
            option.selected = true;
        }
        Tags.appendChild(option);
    });
});


generate_lorem_ipsum.addEventListener('click', () => {
    let textarea_value = ""
    const paragraphs_value = parseInt(paragraphs.value);
    const paragraphs_words_value = parseInt(words_of_paragraphs.value);
    const selectedTag = Tags.value;
    const include_html_value = include_html.value;

    const loremWords = lorem.split(' ');
    const text = loremWords.slice(0, paragraphs_words_value).join(' ');
    const html = `<${selectedTag}>${text}</${selectedTag}>`;
    const tag = include_html_value === 'yes' ? html : text;

    for (let i = 0; i < paragraphs_value; i++) {
        textarea_value += `${tag}\n`;
    }
    textarea_lorem_ipsum.innerHTML = textarea_value;
});