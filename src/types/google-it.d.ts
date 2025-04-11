declare module 'google-it' {
  interface GoogleItResult {
      title: string;
      link: string;
      snippet: string;
  }

  interface GoogleItOptions {
      query: string;
  }

  function googleIt(options: GoogleItOptions): Promise<GoogleItResult[]>;

  export = googleIt;
}
