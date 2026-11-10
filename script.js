    (() => {
      "use strict";

      const modes = {
        easy: { size: 8 },
        medium: { size: 10 },
        hard: { size: 12 }
      };
      const categories = {
        fruits: {
          label: "Fruits",
          words: {
            easy: ["APPLE", "MANGO", "GRAPE", "PEACH", "LEMON", "GUAVA", "PLUM", "BERRY", "KIWI", "LIME", "MELON", "PAPAYA", "FIG", "DATE", "ORANGE", "PEAR"],
            medium: ["PINEAPPLE", "WATERMELON", "STRAWBERRY", "BLUEBERRY", "COCONUT", "AVOCADO", "PAPAYA", "CHERRY", "APRICOT", "BANANA", "GRAPEFRUIT", "CLEMENTINE", "HONEYDEW", "TANGERINE", "BLACKBERRY", "CRANBERRY", "PERSIMMON", "NECTARINE", "MULBERRY", "KIWIFRUIT"],
            hard: ["PINEAPPLE", "TANGERINE", "BLACKBERRY", "CRANBERRY", "POMEGRANATE", "DRAGONFRUIT", "PASSIONFRUIT", "CANTALOUPE", "RASPBERRY", "MANDARIN", "NECTARINE", "KIWIFRUIT", "PERSIMMON", "LONGAN", "RAMBUTAN", "JACKFRUIT", "STARFRUIT", "MULBERRY", "BOYSENBERRY", "ELDERBERRY", "CUSTARDAPPLE", "BREADFRUIT", "DAMSON", "QUINCE"]
          }
        },
        names: {
          label: "Names",
          words: {
            easy: ["EMMA", "OLIVER", "SOPHIA", "LIAM", "MAYA", "NOAH", "AMIRA", "LUCAS", "AVA", "ETHAN", "MIA", "ELI", "ARIA", "LEO", "ZOE", "JACK", "LILY", "OWEN", "IVY", "LUCA", "ELLA", "EZRA", "NORA", "ADAM"],
            medium: ["ISABELLA", "BENJAMIN", "CHARLOTTE", "DANIEL", "ALEXANDER", "GRACE", "MATEO", "SAMANTHA", "NATHAN", "VICTORIA", "OLIVIA", "MICHAEL", "AMELIA", "MATTHEW", "ABIGAIL", "DYLAN", "NATALIE", "GABRIEL", "AURORA", "JONATHAN", "CAMILA", "ADRIAN", "BROOKLYN", "DOMINIC", "EVELYN", "JEREMIAH", "PENELOPE", "THEODORE", "VALENTINA", "SEBASTIAN"],
            hard: ["CHRISTOPHER", "ELIZABETH", "SEBASTIAN", "JACQUELINE", "THEODORE", "MADISON", "GABRIELLA", "JONATHAN", "CAMERON", "NICHOLAS", "ALEXANDRA", "PENELOPE", "CHRISTIAN", "MACKENZIE", "NATHANIEL", "MARGARET", "CATHERINE", "BRIANNA", "VALENTINA", "ANDREW", "JENNIFER", "BENEDICT", "PATRICIA", "EMILIANO", "EVANGELINE", "MAXIMILIAN", "CHARLOTTE", "ALEXANDER", "DOMINIQUE", "FREDERICK", "ISABELLE", "LEONARDO", "MATTHEW", "GREGORY", "STEPHANIE", "WILLIAM"]
          }
        },
        colors: {
          label: "Colors",
          words: {
            easy: ["RED", "BLUE", "GREEN", "PINK", "GOLD", "GRAY", "TEAL", "LIME", "BLACK", "WHITE", "BROWN", "CYAN", "NAVY", "AMBER", "IVORY", "TAN"],
            medium: ["PURPLE", "ORANGE", "YELLOW", "INDIGO", "VIOLET", "SCARLET", "MAGENTA", "MAROON", "SILVER", "BRONZE", "TURQUOISE", "AQUAMARINE", "CHARTREUSE", "BURGUNDY", "LAVENDER", "CRIMSON", "EMERALD", "SAFFRON", "CERULEAN", "MUSTARD"],
            hard: ["TURQUOISE", "AQUAMARINE", "CHARTREUSE", "BURGUNDY", "LAVENDER", "CORAL", "CRIMSON", "EMERALD", "PERIWINKLE", "SAFFRON", "CERULEAN", "MUSTARD", "ROSEWOOD", "FUCHSIA", "ULTRAMARINE", "VERMILION", "GOLDENROD", "SEAFOAM", "MAUVE", "OCHRE", "SIENNA", "PLUM", "PEACOCK", "AMETHYST"]
          }
        },
        countries: {
          label: "Countries",
          words: {
            easy: ["JAPAN", "CHILE", "EGYPT", "SPAIN", "NEPAL", "QATAR", "PERU", "FIJI", "CANADA", "BRAZIL", "FRANCE", "ITALY", "KENYA", "LAOS", "CUBA", "INDIA"],
            medium: ["THAILAND", "PORTUGAL", "MALAYSIA", "PAKISTAN", "ARGENTINA", "SINGAPORE", "MOROCCO", "VIETNAM", "UKRAINE", "IRELAND", "AUSTRALIA", "INDONESIA", "COLOMBIA", "ETHIOPIA", "CAMBODIA", "HUNGARY", "ROMANIA", "SENEGAL", "URUGUAY", "TANZANIA"],
            hard: ["SWITZERLAND", "PHILIPPINES", "AFGHANISTAN", "MADAGASCAR", "LUXEMBOURG", "BANGLADESH", "MOZAMBIQUE", "NICARAGUA", "KAZAKHSTAN", "MAURITANIA", "UZBEKISTAN", "VENEZUELA", "SOUTHAFRICA", "NEWZEALAND", "SAUDIARABIA", "UNITEDSTATES", "SOUTHKOREA", "ELSALVADOR", "COSTARICA", "SIERRALEONE", "BURKINAFASO", "TURKMENISTAN", "GUATEMALA", "KIRIBATI"]
          }
        },
        places: {
          label: "Places",
          words: {
            easy: ["BEACH", "PARK", "HOTEL", "SCHOOL", "CAFE", "MUSEUM", "FARM", "ZOO", "OFFICE", "CHURCH", "BRIDGE", "ISLAND", "GARDEN", "STATION", "KITCHEN", "THEATER"],
            medium: ["AIRPORT", "LIBRARY", "HOSPITAL", "STADIUM", "AQUARIUM", "MOUNTAIN", "PLAYGROUND", "RESTAURANT", "MARKET", "THEATER", "BOOKSHOP", "WATERFALL", "CATHEDRAL", "GALLERY", "FACTORY", "COURTHOUSE", "SKATEPARK", "FARMHOUSE", "TOWNHALL", "LIGHTHOUSE"],
            hard: ["WATERFALL", "UNIVERSITY", "SKYSCRAPER", "BOOKSTORE", "OBSERVATORY", "CATHEDRAL", "AMPHITHEATER", "PLANETARIUM", "GREENHOUSE", "LIGHTHOUSE", "CEMETERY", "GALLERY", "MONUMENT", "COURTHOUSE", "TRAINSTATION", "CONSERVATORY", "WAREHOUSE", "CAMPUS", "CONVENTION", "PAVILION", "CITADEL", "BOARDWALK", "FAIRGROUND", "TOWNCENTER"]
          }
        },
        calendar: {
          label: "Calendar",
          words: {
            easy: ["MARCH", "APRIL", "MAY", "JUNE", "MONDAY", "FRIDAY", "SUNDAY", "JULY", "JANUARY", "FEBRUARY", "AUGUST", "OCTOBER", "NOVEMBER", "TUESDAY", "THURSDAY", "WEEKEND"],
            medium: ["JANUARY", "FEBRUARY", "OCTOBER", "DECEMBER", "TUESDAY", "THURSDAY", "SATURDAY", "NOVEMBER", "WEDNESDAY", "AUGUST", "SEPTEMBER", "MONDAY", "SUNDAY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "WEEKEND", "LEAPYEAR"],
            hard: ["SEPTEMBER", "WEDNESDAY", "THURSDAY", "FEBRUARY", "NOVEMBER", "DECEMBER", "SATURDAY", "JANUARY", "OCTOBER", "TUESDAY", "MONDAY", "SUNDAY", "LEAPYEAR", "WEEKEND", "WEEKDAY", "FORTNIGHT", "QUARTER", "SEMESTER", "EQUINOX", "SOLSTICE", "CALENDAR", "CENTURY", "DECADE", "MILLENNIUM"]
          }
        },
        popularCulture: {
          label: "Popular Culture",
          words: {
            easy: ["MUSIC", "MOVIE", "DANCE", "DRAMA", "COMEDY", "RADIO", "ACTOR", "FAMOUS", "COMICS", "ACTRESS", "SINGER", "ALBUM", "PODCAST", "FANDOM", "THEATER", "OSCARS"],
            medium: ["HOLLYWOOD", "SUPERSTAR", "CONCERT", "SINGER", "PODCAST", "FESTIVAL", "CINEMA", "BROADWAY", "CELEBRITY", "STREAM", "ANIME", "SITCOM", "SOUNDTRACK", "PREMIERE", "FANCLUB", "BILLBOARD", "REALITYTV", "SHOWTIME", "TALENTSHOW", "MUSICVIDEO"],
            hard: ["INFLUENCER", "CHARTTOPPER", "ANIMATION", "STREAMING", "FASHIONWEEK", "TALKSHOW", "SOUNDTRACK", "PAPARAZZI", "MUSICVIDEO", "AWARDSHOW", "FANFICTION", "BILLBOARD", "BLOCKBUSTER", "DOCUMENTARY", "PHOTOGRAPHY", "REDCARPET", "VIDEOGAME", "SHOWBUSINESS", "BOXOFFICE", "CELEBRITY", "SUPERSTAR", "BROADWAY", "HOLLYWOOD", "PODCAST"]
          }
        },
        famousCharacters: {
          label: "Famous Characters",
          words: {
            easy: ["SHREK", "ELSA", "BATMAN", "MARIO", "SONIC", "HARRY", "DORA", "PIKACHU", "HULK", "THOR", "JOKER", "TARZAN", "BAMBI", "SIMBA", "OLAF", "POOH"],
            medium: ["SPIDERMAN", "SUPERMAN", "CINDERELLA", "HERMIONE", "SCOOBYDOO", "POKEMON", "GARFIELD", "GANDALF", "SNOOPY", "ALADDIN", "IRONMAN", "BLACKWIDOW", "DEADPOOL", "RAPUNZEL", "PINOCCHIO", "TINKERBELL", "PETERPAN", "PADDINGTON", "ASTROBOY", "AQUAMAN"],
            hard: ["BLACKPANTHER", "WOLVERINE", "IRONMAN", "DAENERYS", "JACKSPARROW", "PETERPAN", "DRACULA", "SHERLOCK", "RAPUNZEL", "HERCULES", "CAPTAINNEMO", "PINOCCHIO", "WONDERWOMAN", "NIGHTWING", "GREENLANTERN", "MARYPOPPINS", "OPTIMUSPRIME", "DONQUIXOTE", "DAREDEVIL", "KINGKONG", "CAPTAINMARVEL", "BLACKWIDOW", "TINKERBELL", "PADDINGTON"]
          }
        }
      };
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const directions = [
        [0, 1], [1, 0], [1, 1], [1, -1],
        [0, -1], [-1, 0], [-1, -1], [-1, 1]
      ];

      const gridElement = document.getElementById("grid");
      const wordListElement = document.getElementById("wordList");
      const messageElement = document.getElementById("message");
      const difficultyButtons = [...document.querySelectorAll(".difficulty button")];
      const categoryButtons = [...document.querySelectorAll(".category-card")];
      let category = "fruits";
      let mode = "easy";
      let board = [];
      let roundWords = [];
      let previousPuzzleWords = loadPreviousPuzzleWords();
      let foundWords = new Set();
      let score = 0;
      let bestScores = loadScores();
      let anchor = null;
      let pointerStart = null;
      let pointerEnd = null;
      let activePointerId = null;
      let completed = false;

      function currentWords() {
        return roundWords;
      }

      function emptyPreviousPuzzleWords() {
        return Object.fromEntries(Object.keys(categories).map(categoryName => [
          categoryName,
          Object.fromEntries(Object.keys(modes).map(difficulty => [difficulty, []]))
        ]));
      }

      function loadPreviousPuzzleWords() {
        const history = emptyPreviousPuzzleWords();
        try {
          const saved = JSON.parse(localStorage.getItem("wordHuntPreviousPuzzleWords") || "{}");
          const oldNameHistory = JSON.parse(localStorage.getItem("wordHuntPreviousNameWords") || "{}");
          for (const categoryName of Object.keys(categories)) {
            for (const difficulty of Object.keys(modes)) {
              const pool = categories[categoryName].words[difficulty];
              const savedWords = saved[categoryName]?.[difficulty];
              const legacyNames = categoryName === "names" ? oldNameHistory[difficulty] : null;
              const words = Array.isArray(savedWords) ? savedWords : legacyNames;
              history[categoryName][difficulty] = Array.isArray(words)
                ? [...new Set(words.filter(word => pool.includes(word)))]
                : [];
            }
          }
        } catch (error) {
          console.warn("Could not load previous puzzle words.", error);
        }
        return history;
      }

      function chooseWordsForPuzzle() {
        const pool = categories[category].words[mode];
        const batchSize = modes[mode].size;
        const previous = new Set(previousPuzzleWords[category][mode]);
        const shuffled = pool.filter(word => !previous.has(word));
        for (let index = shuffled.length - 1; index > 0; index--) {
          const swapIndex = Math.floor(Math.random() * (index + 1));
          [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
        }
        const words = shuffled.length >= batchSize
          ? shuffled.slice(0, batchSize)
          : pool.slice(0, batchSize);
        previousPuzzleWords[category][mode] = words;
        try {
          localStorage.setItem("wordHuntPreviousPuzzleWords", JSON.stringify(previousPuzzleWords));
        } catch (error) {
          console.warn("Could not save previous puzzle words.", error);
        }
        return words;
      }

      function loadScores() {
        try {
          const saved = JSON.parse(localStorage.getItem("wordHuntBestScores") || "{}");
          return Object.fromEntries(Object.keys(categories).map(categoryName => {
            const categoryScores = saved[categoryName] || {};
            const scores = Object.fromEntries(Object.keys(modes).map(difficulty => {
              const previousScore = categoryName === "fruits" ? saved[difficulty] : 0;
              const value = categoryScores[difficulty] ?? previousScore;
              return [difficulty, Number.isFinite(value) ? value : 0];
            }));
            return [categoryName, scores];
          }));
        } catch (error) {
          console.warn("Could not load saved high scores.", error);
          return Object.fromEntries(Object.keys(categories).map(categoryName => [
            categoryName,
            Object.fromEntries(Object.keys(modes).map(difficulty => [difficulty, 0]))
          ]));
        }
      }

      function saveScores() {
        try {
          localStorage.setItem("wordHuntBestScores", JSON.stringify(bestScores));
        } catch (error) {
          console.warn("Could not save high scores.", error);
          setMessage("Scores could not be saved in this browser.", true);
        }
      }

      function makeBoard() {
        const size = modes[mode].size;
        const cells = Array.from({ length: size }, () => Array(size).fill(""));
        for (const word of currentWords()) {
          let placed = false;
          for (let attempt = 0; attempt < 500 && !placed; attempt++) {
            const [dr, dc] = directions[Math.floor(Math.random() * directions.length)];
            const row = Math.floor(Math.random() * size);
            const col = Math.floor(Math.random() * size);
            const endRow = row + dr * (word.length - 1);
            const endCol = col + dc * (word.length - 1);
            if (endRow < 0 || endRow >= size || endCol < 0 || endCol >= size) continue;

            let fits = true;
            for (let index = 0; index < word.length; index++) {
              const existing = cells[row + dr * index][col + dc * index];
              if (existing && existing !== word[index]) {
                fits = false;
                break;
              }
            }
            if (!fits) continue;
            for (let index = 0; index < word.length; index++) {
              cells[row + dr * index][col + dc * index] = word[index];
            }
            placed = true;
          }
          if (!placed) throw new Error(`Could not place the word "${word}" on the board.`);
        }

        return cells.map(row => row.map(letter => letter || alphabet[Math.floor(Math.random() * alphabet.length)]));
      }

      function renderGrid() {
        gridElement.replaceChildren();
        const size = modes[mode].size;
        gridElement.dataset.size = String(size);
        gridElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.forEach((row, rowIndex) => row.forEach((letter, colIndex) => {
          const cell = document.createElement("button");
          cell.type = "button";
          cell.className = "cell";
          cell.textContent = letter;
          cell.dataset.row = String(rowIndex);
          cell.dataset.col = String(colIndex);
          cell.setAttribute("aria-label", `${letter}, row ${rowIndex + 1}, column ${colIndex + 1}`);
          gridElement.append(cell);
        }));
      }

      function renderWords() {
        wordListElement.replaceChildren();
        for (const word of currentWords()) {
          const item = document.createElement("li");
          item.textContent = word;
          if (foundWords.has(word)) item.classList.add("found");
          wordListElement.append(item);
        }
      }

      function updateScoreboard() {
        const best = bestScores[category][mode];
        document.getElementById("score").textContent = String(score);
        document.getElementById("bestScore").textContent = String(best);
        document.getElementById("topBest").textContent = String(best);
        document.getElementById("foundCount").textContent = String(foundWords.size);
        document.getElementById("totalCount").textContent = String(currentWords().length);
        document.getElementById("wordsRemaining").textContent = `${currentWords().length - foundWords.size} left`;
      }

      function setMessage(text, isError = false) {
        messageElement.textContent = text;
        messageElement.classList.toggle("error", isError);
      }

      function clearSelection() {
        gridElement.querySelectorAll(".cell.selected").forEach(cell => cell.classList.remove("selected"));
      }

      function makeLine(start, end) {
        const rowDiff = end.row - start.row;
        const colDiff = end.col - start.col;
        const steps = Math.max(Math.abs(rowDiff), Math.abs(colDiff));
        if (steps === 0 || (rowDiff !== 0 && colDiff !== 0 && Math.abs(rowDiff) !== Math.abs(colDiff))) return [];
        const rowStep = Math.sign(rowDiff);
        const colStep = Math.sign(colDiff);
        return Array.from({ length: steps + 1 }, (_, index) => ({
          row: start.row + rowStep * index,
          col: start.col + colStep * index
        }));
      }

      function showSelection(start, end) {
        clearSelection();
        const path = makeLine(start, end);
        path.forEach(({ row, col }) => {
          const cell = gridElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
          if (cell && !cell.classList.contains("found")) cell.classList.add("selected");
        });
      }

      function tryWord(start, end) {
        const path = makeLine(start, end);
        if (!path.length) {
          setMessage("Choose a straight line of letters.", true);
          return false;
        }
        const word = path.map(({ row, col }) => board[row][col]).join("");
        const reverse = [...word].reverse().join("");
        const match = currentWords().find(candidate =>
          !foundWords.has(candidate) && (candidate === word || candidate === reverse)
        );
        if (!match) {
          setMessage("Not a hidden word — try another line.", true);
          return false;
        }

        foundWords.add(match);
        path.forEach(({ row, col }) => {
          const cell = gridElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
          if (cell) {
            cell.classList.remove("selected");
            cell.classList.add("found");
            cell.setAttribute("aria-label", `${cell.textContent}, ${match}, found`);
          }
        });
        score += match.length * 10;
        if (score > bestScores[category][mode]) {
          bestScores[category][mode] = score;
          saveScores();
        }
        renderWords();
        updateScoreboard();
        setMessage(`${match} found! +${match.length * 10} points`);
        anchor = null;

        if (foundWords.size === currentWords().length) {
          completed = true;
          document.getElementById("winMessage").textContent = `Puzzle complete! Final score: ${score}. Your best for ${categories[category].label} (${mode}) is ${bestScores[category][mode]}.`;
          document.getElementById("nextPuzzle").hidden = false;
          document.getElementById("winBanner").classList.add("visible");
          setMessage("Amazing — you found them all!");
        }
        return true;
      }

      function cellPosition(cell) {
        return { row: Number(cell.dataset.row), col: Number(cell.dataset.col) };
      }

      function cellAtPoint(event) {
        const element = document.elementFromPoint(event.clientX, event.clientY);
        const cell = element instanceof Element ? element.closest(".cell") : null;
        return cell && gridElement.contains(cell) ? cell : null;
      }

      gridElement.addEventListener("pointerdown", event => {
        const cell = event.target.closest(".cell");
        if (!cell || completed) return;
        pointerStart = cellPosition(cell);
        pointerEnd = pointerStart;
        activePointerId = event.pointerId;
        gridElement.setPointerCapture(event.pointerId);
      });

      gridElement.addEventListener("pointermove", event => {
        if (!pointerStart || event.pointerId !== activePointerId) return;
        const cell = cellAtPoint(event);
        if (!cell) return;
        pointerEnd = cellPosition(cell);
        showSelection(pointerStart, pointerEnd);
      });

      gridElement.addEventListener("pointerup", event => {
        if (event.pointerId !== activePointerId) return;
        const start = pointerStart;
        const endCell = cellAtPoint(event);
        const end = endCell ? cellPosition(endCell) : pointerEnd;
        pointerStart = null;
        pointerEnd = null;
        activePointerId = null;
        if (!start || !end || completed) return;
        if (start.row !== end.row || start.col !== end.col) {
          tryWord(start, end);
          clearSelection();
          return;
        }

        if (anchor) {
          if (anchor.row === end.row && anchor.col === end.col) {
            anchor = null;
            clearSelection();
            setMessage("Selection cleared.");
          } else {
            tryWord(anchor, end);
            clearSelection();
          }
        } else {
          anchor = end;
          showSelection(end, end);
          setMessage("Now tap the last letter.");
        }
      });

      gridElement.addEventListener("pointercancel", event => {
        if (event.pointerId !== activePointerId) return;
        pointerStart = null;
        pointerEnd = null;
        activePointerId = null;
        clearSelection();
      });

      gridElement.addEventListener("keydown", event => {
        if (event.key !== "Enter" && event.key !== " ") return;
        const cell = event.target.closest(".cell");
        if (!cell || completed) return;
        event.preventDefault();
        const position = cellPosition(cell);
        if (!anchor) {
          anchor = position;
          showSelection(position, position);
          setMessage("Now select the last letter.");
        } else {
          tryWord(anchor, position);
          clearSelection();
        }
      });

      function startGame(nextMode = mode) {
        mode = nextMode;
        roundWords = chooseWordsForPuzzle();
        board = makeBoard();
        const words = currentWords();
        foundWords = new Set();
        score = 0;
        anchor = null;
        pointerStart = null;
        pointerEnd = null;
        activePointerId = null;
        completed = false;
        document.getElementById("winBanner").classList.remove("visible");
        document.getElementById("nextPuzzle").hidden = true;
        difficultyButtons.forEach(button => {
          const active = button.dataset.mode === mode;
          button.classList.toggle("active", active);
          button.setAttribute("aria-pressed", String(active));
        });
        const { size } = modes[mode];
        const label = mode[0].toUpperCase() + mode.slice(1);
        document.getElementById("categoryLabel").textContent = `${categories[category].label.toUpperCase()} WORD SEARCH`;
        document.getElementById("difficultyLabel").textContent = `${label} · ${size} × ${size}`;
        document.getElementById("modeDescription").textContent = `${words.length} words · ${size} × ${size}`;
        renderGrid();
        renderWords();
        updateScoreboard();
        setMessage("Pick a word to get started!");
      }

      difficultyButtons.forEach(button => {
        button.addEventListener("click", () => startGame(button.dataset.mode));
      });
      categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
          category = button.dataset.category;
          categoryButtons.forEach(option => {
            const selected = option === button;
            option.classList.toggle("active", selected);
            option.setAttribute("aria-pressed", String(selected));
          });
        });
      });
      document.getElementById("startGame").addEventListener("click", () => {
        document.getElementById("categoryPicker").hidden = true;
        document.getElementById("gameScreen").hidden = false;
        startGame();
      });
      document.getElementById("backCategories").addEventListener("click", () => {
        document.getElementById("gameScreen").hidden = true;
        document.getElementById("categoryPicker").hidden = false;
      });
      document.getElementById("newGame").addEventListener("click", () => startGame());
      document.getElementById("nextPuzzle").addEventListener("click", () => startGame());
      document.getElementById("resetScore").addEventListener("click", () => {
        if (!window.confirm("Reset all highest scores?")) return;
        bestScores = Object.fromEntries(Object.keys(categories).map(categoryName => [
          categoryName,
          Object.fromEntries(Object.keys(modes).map(difficulty => [difficulty, 0]))
        ]));
        saveScores();
        updateScoreboard();
        setMessage("Highest scores reset.");
      });

    })();