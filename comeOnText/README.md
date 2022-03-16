# Come On Text

## What is Come On Text

Come On Text is a tool which can change texts with specific rules. It is migrated from [Line Destroyer][1].

## How to use Come On Text

From top to bottom, there are **configuration**, **input area**, and **result area**.

### Button Mode

There are 4 sets of buttons can be switched at **button mode** as you like.

#### Papoy mode - separated actions

- Press **Banana!** to paste content you copied
- Press **Roger!** to run transform
- Press **Eat banana!** to clear input area
- Press **Say Thank you to minion and take it away** to copy results

In the following modes, buttons are started to be combined.

#### Gelato mode - paste and run

- **Say Thank you to minion and take it away** included
- Press **Gelato!** to replace content in input area and run transform (which combines functions of the other three buttons in Papoy mode)

#### Para tu mode - run and copy

- **Banana!** and **Eat banana!** included
- Press **Para tu** to run transform and copy results (which combines functions of the other two buttons in Papoy mode)

#### Banana mode - one touch

- Press **Go banana!** to replace content in input area, run transform, and copy results

### Features

You can apply change on text by configure the feautures needed **before** transform on input text.

- **Line break removal**: remove all line breaks of input text
- **Space removal**: remove all half width spaces of input text
- **Punctuations**: change specific half width characters (lower row) into full width characters (upper row):

|？|！|，|；|：|（|）|
|---|---|---|---|---|---|---|
|?|!|,|;|:|(|)|

### Collect Bananas

A transform bases on what currently in input area. The **Collect bananas?** toggle provides a temporary save of former results in following format:

*(1st results) (double line breaks) (2nd results) (double line breaks) (3rd results) (double line breaks)...*

For example:

```text
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a diam maecenas sed.

Sed vulputate odio ut enim blandit volutpat. Velit egestas dui id ornare arcu. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.

Nam at lectus urna duis convallis convallis tellus id. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse.


...
```

which will all be shown at results area. Toggle **Collect bananas?** will also clear the saved inputs.

[1]: ../lineDestroyer/ (Line Destroyer)
