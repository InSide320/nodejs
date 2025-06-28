
document.querySelector('#uploadForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const fileInput = form.querySelector('input[name="file"]');

  if (fileInput.files.length === 0) {
    console.log('choose file');
    return;
  }

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  try {
    const response = await fetch('/upload-file', {
      method: 'POST',
      body: formData // Content-Type выставится автоматически
    });

    if (response.ok) {
      const text = await response.text();
      console.log(text);
    } else {
      console.log('some error');
    }
  } catch (error) {
    console.error('Ошибка:', error);
  }
});
