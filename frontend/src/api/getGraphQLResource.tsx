import {httpClient} from "./httpClient";
import {useState} from "react";
import axios from "axios";

async function getGraphQLResource(recordType: string): Promise<any[]> {
    try {
        const response = await httpClient().post(`/${recordType}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default getGraphQLResource;
