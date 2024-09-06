// contexts/WebSocketContext.tsx

// import React, {
//   createContext,
//   useEffect,
//   useContext,
//   ReactNode,
//   useRef,
//   useCallback
// } from 'react';

// interface WebSocketContextType {
//   socket: WebSocket | null;
//   messages: string[];
// }

// const WebSocketContext = createContext<WebSocketContextType | undefined>(
//   undefined
// );

// interface WebSocketProviderProps {
//   children: ReactNode;
//   senderId: string;
// }

// export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
//   senderId,
//   children
// }) => {
//   const ws = useRef<WebSocket | null>(null);

//   const connectToWebSocket = useCallback(async () => {
//     ws.current = new WebSocket('ws://localhost:8080');

//     ws.current.onopen = () => {
//       console.log('Connected to the WebSocket server');
//       if (ws.current)
//         ws.current.send(
//           JSON.stringify({
//             type: 'connection',
//             connectedUserId: senderId
//           })
//         );
//     };

//     ws.current.onmessage = async (event) => {
//       const data = event.data;
//       if (event.data) {
//         setIsNewMessageReceived(true);
//       }

//       const parsedMessage = JSON.parse(data);
//       await sendMessageAction(
//         parsedMessage.receiverId,
//         parsedMessage.content,
//         'text'
//       );
//     };

//     ws.current.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };

//     ws.current.onclose = () => {
//       console.log('Disconnected from the WebSocket server');
//     };
//   }, [senderId]);
//   useEffect(() => {
//     connectToWebSocket();
//     return () => {
//       if (ws.current) {
//         ws.current.close();
//       }
//     };
//   }, []);

//   return (
//     <WebSocketContext.Provider value={{ socket, messages }}>
//       {children}
//     </WebSocketContext.Provider>
//   );
// };

// export const useWebSocket = (): WebSocketContextType => {
//   const context = useContext(WebSocketContext);
//   if (context === undefined) {
//     throw new Error('useWebSocket must be used within a WebSocketProvider');
//   }
//   return context;
// };
