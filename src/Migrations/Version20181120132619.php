<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181120132619 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE part (id INT AUTO_INCREMENT NOT NULL, section_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, tag_name VARCHAR(255) NOT NULL, INDEX IDX_490F70C6D823E37A (section_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE part ADD CONSTRAINT FK_490F70C6D823E37A FOREIGN KEY (section_id) REFERENCES section (id)');
        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251ED823E37A');
        $this->addSql('DROP INDEX IDX_1F1B251ED823E37A ON item');
        $this->addSql('ALTER TABLE item DROP section_id, DROP tag_name');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE part');
        $this->addSql('ALTER TABLE item ADD section_id INT DEFAULT NULL, ADD tag_name VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251ED823E37A FOREIGN KEY (section_id) REFERENCES section (id)');
        $this->addSql('CREATE INDEX IDX_1F1B251ED823E37A ON item (section_id)');
    }
}
