document.addEventListener('DOMContentLoaded', () => {
  // Навигация по якорям
  document.querySelectorAll('nav ul li a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const bookContainer = document.getElementById('bookContainer');
  const paginationContainer = document.getElementById('pagination');
  const searchInput = document.getElementById('searchInput');

  const books = [
    {
      title: 'Я украл чужую жизнь',
      author: 'Алексей Корнелюк',
      image: 'https://knigli.ru/wp-content/uploads/2021/05/oblozhka-kniga-ya-ukral-chuzhuyu-zhizn-333x500.jpg',
      genre: 'Роман',
      description: 'История о жизни, которую можно потерять и обрести заново. Это книга о сложных жизненных решениях, любви и самопожертвовании.'
    },
    {
      title: 'В этот день я познакомился с собой',
      author: 'Алексей Корнелюк',
      image: 'https://knigli.ru/wp-content/uploads/2021/05/oblozhka-knigi-v-etot-den-ya-poznakomilsya-s-soboj-333x500.jpg',
      genre: 'Психология',
      description: 'Поиск внутренней гармонии, понимание собственных чувств и принятие себя таким, какой ты есть. Книга поможет взглянуть внутрь себя.'
    },
    {
      title: 'Портрет Дориана Грея',
      author: 'Оскар Уайльд',
      image: 'https://i1.mybook.io/p/512x852/book_covers/1f/f6/1ff6b336-43c6-4c00-a944-cecf9805f413.jpe?v2',
      genre: 'Классика',
      description: 'Философский роман о красоте, морали и бессмертии. История о молодом человеке, продавшем душу ради вечной юности.'
    },
    {
      title: 'Сцена после титров',
      author: 'Алексей Корнелюк',
      image: 'https://knigli.ru/wp-content/uploads/2021/05/oblozhka-knigi-stsena-posle-titrov-333x500.jpg',
      genre: 'Современная проза',
      description: 'Что происходит с героем после финальных титров? Неожиданные повороты, глубокие мысли и мощный эмоциональный фон.'
    },
    {
      title: 'Пересадка на станции Вечность',
      author: 'Алексей Корнелюк',
      image: 'https://knigli.ru/wp-content/uploads/2021/05/oblozhka-knigi-peresadka-na-stantsii-vechnost-333x500.jpg',
      genre: 'Фантастика',
      description: 'Станция между мирами, где решаются судьбы. Невероятное пространство вне времени, где всё возможно — даже перезапустить жизнь.'
    },
    {
      title: 'Второй шанс умереть',
      author: 'Алексей Корнелюк',
      image: 'https://knigli.ru/wp-content/uploads/2021/11/oblozhka-knigi-vtoroj-shans-umeret-354x500.jpg',
      genre: 'Триллер',
      description: 'Мрачный триллер о человеке, получившем второй шанс... на смерть. Тайны прошлого не отпускают и ведут к неожиданной развязке.'
    },
    {
      title: 'Время никогда не ждёт',
      author: 'Роман Решетов',
      image: 'https://knigli.ru/wp-content/uploads/2022/02/oblozhka-knigi-vremya-nikogda-ne-zhdyot-333x500.jpg',
      genre: 'Фантастика',
      description: 'Роман о времени, которое невозможно контролировать. Что, если у вас есть только один шанс изменить всё?'
    },
    {
      title: 'Наперегонки со счастьем',
      author: 'Алексей Корнелюк',
      image: 'https://knigli.ru/wp-content/uploads/2021/05/oblozhka-knigi-naperegonki-so-schastem-350x500.jpg',
      genre: 'Современная проза',
      description: 'История о человеке, который решает догнать свою мечту любой ценой. Путь к счастью полон препятствий.'
    },
    {
      title: 'Скоро на экранах',
      author: 'Алексей Корнелюк',
      image: 'https://knigli.ru/wp-content/uploads/2021/05/oblozhka-knigi-skoro-na-ekranah-333x500.jpg',
      genre: 'Триллер',
      description: 'Герой живёт чужими сюжетами — пока однажды сценарий не становится реальностью. Где грань между вымыслом и правдой?'
    },
    {
      title: 'На небесах тебе нет места',
      author: 'Алексей Корнелюк',
      image: 'https://knigli.ru/wp-content/uploads/2021/11/oblozhka-knigi-na-nebesah-tebe-net-mesta-333x500.jpg',
      genre: 'Драма',
      description: 'Психологическая история о потере, боли и попытке вернуться к жизни после трагедии. Кто имеет право на прощение?'
    },
    {
      title: 'Эффект Люцифера',
      author: 'Филип Зимбардо',
      image: 'https://avatars.dzeninfra.ru/get-zen_doc/9707955/pub_643c1d2d4b3e193f739f37b5_643c3843b9ff2b009f4d90bd/scale_1200',
      genre: 'Психология',
      description: 'Научное исследование, объясняющее, как обычные люди могут превратиться в злодеев в определённых условиях. Основано на Стэнфордском тюремном эксперименте.'
    },
    {
      title: 'Страх близости',
      author: 'Илсе Санд',
      image: 'https://avatars.dzeninfra.ru/get-zen_doc/9707108/pub_643c1d2d4b3e193f739f37b5_643c3970b727dd713a7b1464/scale_1200',
      genre: 'Саморазвитие',
      description: 'Практическое руководство по построению доверительных отношений. Как справиться со страхом быть настоящим и уязвимым?'
    }
  ];

  const userCatalog = JSON.parse(localStorage.getItem('userCatalog')) || [];
  const booksPerPage = 6;
  let currentPage = 1;
  let filteredBooks = [...books];

  const saveToCatalog = (book) => {
    if (!userCatalog.some((item) => item.title === book.title)) {
      userCatalog.push(book);
      localStorage.setItem('userCatalog', JSON.stringify(userCatalog));
      alert('Книга добавлена в каталог!');
    } else {
      alert('Эта книга уже в вашем каталоге!');
    }
  };

  const renderBooks = () => {
    bookContainer.innerHTML = '';
    const start = (currentPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    const booksToShow = filteredBooks.slice(start, end);

    booksToShow.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>Автор: ${book.author}</p>
        <button class="add-to-catalog">Добавить в каталог</button>
      `;

const categoryButtons = document.createElement('div');
categoryButtons.classList.add('category-buttons');

['Читаю', 'Планирую', 'Прочитано', 'Брошено'].forEach((label) => {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.classList.add('cat-btn');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    saveBookCategory(book, label);
    alert(`Книга добавлена в категорию: ${label}`);
  });
  categoryButtons.appendChild(btn);
});

bookDiv.appendChild(categoryButtons);

bookDiv.addEventListener('click', () => {
  openModal(
    book.title,
    book.author,
    book.genre || 'Не указан',
    book.description || 'Описание отсутствует.',
    book.vip || false
  );
});


      const addButton = bookDiv.querySelector('.add-to-catalog');
      addButton.addEventListener('click', (event) => {
        event.stopPropagation();
        saveToCatalog(book);
      });

      bookContainer.appendChild(bookDiv);
    });
  };

  const renderPagination = () => {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.classList.add('pagination-button');
      if (i === currentPage) button.classList.add('active');
      button.addEventListener('click', () => {
        currentPage = i;
        renderBooks();
        renderPagination();
      });
      paginationContainer.appendChild(button);
    }
  };

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );

    currentPage = 1;
    renderBooks();
    renderPagination();
  });

  renderBooks();
  renderPagination();

    const vipButton = document.getElementById('vipButton');
    if (vipButton) {
      vipButton.addEventListener('click', activateVip);
    }
    updateVipStatus();

    const cancelVipButton = document.getElementById('cancelVipButton');
    if (cancelVipButton) {
      cancelVipButton.addEventListener('click', cancelVip);
    }

});

function openModal(title, author, genre, description) {
  const modal = document.getElementById('bookModal');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalAuthor').textContent = author;
  document.getElementById('modalGenre').textContent = genre;
  document.getElementById('modalDescription').textContent = description;
  modal.style.display = 'flex';
  const ratingContainer = document.createElement('div');
  ratingContainer.classList.add('star-rating');
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.textContent = '★';
    star.classList.add('star');
    star.dataset.value = i;
    star.addEventListener('click', () => {
      saveRating(title, i);
      updateStars(ratingContainer, i);
    });
    ratingContainer.appendChild(star);
  }
  document.querySelector('#bookModal .modal-content').appendChild(ratingContainer);
  updateStars(ratingContainer, getRating(title));

}

function closeModal() {
  document.getElementById('bookModal').style.display = 'none';
}

function addTransaction(title, price) {
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  transactions.push({
    title,
    price,
    date: new Date().toLocaleString(),
  });
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function showTransactionHistory() {
  const modal = document.getElementById('transactionModal');
  const list = document.getElementById('transactionList');
  list.innerHTML = '';
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  if (transactions.length === 0) {
    list.innerHTML = '<li>Нет записей.</li>';
  } else {
    transactions.forEach(tx => {
      const li = document.createElement('li');
      li.textContent = `«${tx.title}» — ${tx.price}₸ (${tx.date})`;
      list.appendChild(li);
    });
  }
  modal.style.display = 'flex';
}

function closeTransactionModal() {
  document.getElementById('transactionModal').style.display = 'none';
}

const saveBookCategory = (book, category) => {
  const categories = JSON.parse(localStorage.getItem('bookCategories')) || {};
  categories[book.title] = { ...book, category };
  localStorage.setItem('bookCategories', JSON.stringify(categories));
};

function clearViewHistory() {
  localStorage.removeItem('viewHistory');
  document.getElementById('viewHistoryList').innerHTML = '<li>История очищена.</li>';
}

function updateVipStatus() {
  const isVip = localStorage.getItem('vipActivated') === 'true';
  const vipMessage = document.getElementById('vipMessage');
  const vipButton = document.getElementById('vipButton');

  if (vipMessage && vipButton) {
    if (isVip) {
      vipMessage.textContent = 'VIP: Активировано';
      vipButton.style.display = 'none';
    } else {
      vipMessage.textContent = 'VIP: Не активировано';
      vipButton.style.display = 'inline-block';
    }
  }
}

function activateVip() {
  localStorage.setItem('vipActivated', 'true');
  updateVipStatus();
  alert('VIP-подписка активирована!');
}

function cancelVip() {
  localStorage.removeItem('vipActivated');
  updateVipStatus();
  alert('VIP-подписка отменена.');
}

function updateVipStatus() {
  const isVip = localStorage.getItem('vipActivated') === 'true';
  const vipMessage = document.getElementById('vipMessage');
  const vipButton = document.getElementById('vipButton');
  const cancelVipButton = document.getElementById('cancelVipButton');

  if (isVip) {
    vipMessage.textContent = 'VIP: Активировано';
    vipButton.style.display = 'none';
    cancelVipButton.style.display = 'inline-block';
  } else {
    vipMessage.textContent = 'VIP: Не активировано';
    vipButton.style.display = 'inline-block';
    cancelVipButton.style.display = 'none';
  }
}
