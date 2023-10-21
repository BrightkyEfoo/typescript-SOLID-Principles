import fetch from "node-fetch";
namespace srp {
  /**
   *
   * @param userId is the id of the user you want fetch his posts
   * @returns the list of all posts posted by that user
   */
  const getPosts = async (userId: number) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      );
      return await response.json();
    } catch (e) {
      errorHandler(e, "Error while fetching Posts!");
    }
  };

  /**
   *
   * @param tab this argument is the array of things you want remove a key on each of them
   * @param key the string representation of the key you want remove
   * @returns a new array of all that things without the deleted key
   */
  const removeKeyOnObjectsTab = <T>(tab: T[], key: keyof T) => {
    return tab.map((element) => {
      delete element[key];
      return element;
    });
  };

  /**
   * This function helps to handle an error occured in your try block
   * @param e The error occured
   * @param msg the message you want print at your custom error thrown
   * @author brightky
   */
  const errorHandler = (e: Error, msg: string) => {
    console.log(e);
    throw Error(msg);
  };

  const main = async () => {
    const result = (await getPosts(1)) as any;

    console.log(removeKeyOnObjectsTab(result, "userId"));
  };

  main();
}
