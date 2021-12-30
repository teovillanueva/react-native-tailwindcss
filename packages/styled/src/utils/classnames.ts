import { ClassnameValue } from "../types";

export const compileClassNames = <P extends {}>(
  strings: string[],
  tags: ClassnameValue<P>[],
  props: P
) => {
  const classnames = strings.map((string) =>
    string.replaceAll("\n", "").trim()
  );

  const missingStringIndexes: number[] = [];

  classnames.forEach((string, idx) => {
    if (string === "") {
      missingStringIndexes.push(idx);
    } else {
      classnames[idx] = classnames[idx].trim();
    }
  });

  missingStringIndexes.forEach((missingIndex, idx) => {
    const tag = tags[idx];
    if (tag) {
      if (Array.isArray(tag)) {
        // Tag is array of strings
        classnames[missingIndex] = tag.join(" ");
      }
      if (typeof tag === "function") {
        const tagResult = tag(props);

        classnames[missingIndex] = Array.isArray(tagResult)
          ? tagResult.join(" ")
          : tagResult;
      }
      if (typeof tag === "string") {
        classnames[missingIndex] = tag;
      }
    }
  });

  return classnames.join(" ");
};
