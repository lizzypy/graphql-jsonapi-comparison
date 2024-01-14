require 'rails_helper'

describe 'Students Classes', type: :request do
  context 'index' do
    let(:subject) { GraphqlJsonapiComparisonSchema.execute(query_string)}
    let(:query_string) do
      <<-GRAPHQL
      {
         studentsClasses {
           room 
         }
      }
      GRAPHQL
    end
    before do
      create_list(:students_class, 3)
    end
    it "load all students classes" do
      result = subject
      students_classes = result.values[0].deep_symbolize_keys[:studentsClasses]
      expect(students_classes.length).to eq(3)
    end
  end
end
