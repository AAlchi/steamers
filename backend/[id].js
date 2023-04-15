import {google} from 'googleapis';

export async function getServerSideVolunteers({query}){

    const auth =await google.auth.getClient({scopes: ['https://www.googleapis.com/auth/spreadsheets']});
    const sheets = google.sheets({version: 'v4', auth})

    const { id } = query;
    const range = `Sheet1!A${id}:C${id}`;

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    })
    
    const [name, number, email] = response.data.values;


    return{
        volunteer: {
            name,
            number,
            email
        }
    }
}

export default function Volunteer({name, number, email})