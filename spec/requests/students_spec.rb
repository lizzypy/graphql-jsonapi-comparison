require 'rails_helper'

describe 'Students', type: :request do
  context 'index' do
    let(:subject) { GraphqlJsonapiComparisonSchema.execute(query_string)}
    let(:query_string) do
      <<-GRAPHQL
      {
         students {
          firstName
          lastName
          birthdate
         }
      }
      GRAPHQL
    end
    before do
      create_list(:student, 3)
    end
    it "loads posts by ID" do

      result = subject
      students = result.values[0].deep_symbolize_keys[:students]
      expect(students.length).to eq(3)
    end
  end
end
