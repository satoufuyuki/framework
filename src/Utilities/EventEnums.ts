export enum ListenerEvents {
    ListenerError = "listenerError"
}

export enum Events {
    InteractionCreate = "interactionCreate",
    PossibleChatInputCommand = "possibleChatInputCommand",
    PossibleContextMenuCommand = "possibleContextMenuCommand",
    PossibleAutocompleteInteraction = "possibleAutoCompleteInteraction",

    PreChatInputCommandRun = "preChatInputCommandRun",
    ChatInputCommandAccepted = "chatInputCommandAccepted",
    ChatInputCommandError = "chatInputCommandError",

    PreContextMenuCommandRun = "preContextMenuCommandRun",
    ContextMenuCommandAccepted = "contextMenuCommandAccepted",
    ContextMenuCommandError = "contextMenuCommandError",

    PreContextCommandRun = "preContextCommandRun",
    ContextCommandAccepted = "contextCommandAccepted",
    ContextCommandError = "contextCommandError"
}
