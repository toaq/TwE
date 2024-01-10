from collections import defaultdict
import json
import os
import re
import unicodedata


def bare(word):
    word = unicodedata.normalize("NFKD", word.lower())
    return "".join(
        c.replace("i", "ı") for c in word if not (0x0300 <= ord(c) <= 0x030F)
    )


with open("../toaq-dictionary/dictionary.json") as f:
    dictionary_json = json.load(f)

dictionary = {
    k: (entry["type"], entry["gloss"])
    for entry in dictionary_json
    for k in [bare(entry["toaq"]), entry["toaq"]]
}

vocab = defaultdict(lambda: defaultdict(set))
bad = {"fn", "samı", "boko", "tomı"}
base = {
    "jı": "jí",
    "suq": "súq",
    "ho": "hó",
    "maq": "máq",
    "ha": "há",
    "hoı": "hóı",
    "ru": "rú",
    "keo": "kéo",
    "nı": "ní",
    "nıjuı": "níjuı",
    "nıjao": "níjao",
    "sa": "sá",
    "tu": "tú",
    "baq": "báq",
    "hı": "hí",
    "bı": "bï",
    "na": "nä",
    "moq": "móq",
}


for lesson in os.listdir("_lessons"):
    with open(f"_lessons/{lesson}/index.md") as f:
        for line in f:
            if line.startswith("| **"):
                for word in re.findall("\\w+", line.split("|")[1]):
                    b = bare(word)
                    if b.isdigit() or b in bad:
                        continue
                    b = base.get(b, b)
                    pos = dictionary.get(b, ("predicate", "?"))[0]
                    vocab[pos][b].add(lesson)

print(
    """---
title: 'Vocabulary'
delta: true
---
# Vocabulary

This page offers an overview of all the words taught in the course, grouped by part-of-speech.
"""
)

for pos, vs in vocab.items():
    print("## " + pos.title() + "\n\n| Word | Meaning | Lessons |\n| --- | --- | --- |")
    for k, v in vs.items():
        entry = dictionary.get(k, ("predicate", "?"))
        links = ", ".join(f"[{x}](../{x})" for x in sorted(v))
        print(f"| {k} | {entry[1]} | {links} |")
    print()
